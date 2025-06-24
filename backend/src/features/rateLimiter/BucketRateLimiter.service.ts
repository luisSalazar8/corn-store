import { AppSource } from "../../database";
import { BucketRateLimit } from "../../database/entities/mainDB/BucketRateLimit";

async function GetBucketRecord(userID: string) {
  const bucketRLRepository = AppSource.getRepository(BucketRateLimit);
  let bucketRecord = await bucketRLRepository
    .createQueryBuilder("bucket")
    .setLock("pessimistic_write")
    .where("bucket.userId = :id", { id: userID })
    .getOne();

  return bucketRecord;
}

export async function CheckLimit(userID: string): Promise<boolean> {
  const refillRate = Number(process.env.RL_BUCKET_REFILL);
  const bucketMaxSize = Number(process.env.RL_BUCKET_SIZE);
  const bucketRLRepository = AppSource.getRepository(BucketRateLimit);

  let bucketRecord = await GetBucketRecord(userID);
  if (!bucketRecord) {
    const newBucketRecord = bucketRLRepository.create({
      user: { id: userID },
      tokensUsed: 1,
      refillTimestamp: new Date(),
    });

    await bucketRLRepository.save(newBucketRecord);
    return true;
  }

  const current = Date.now();
  const refillTimestamp = bucketRecord.refillTimestamp;
  if (current - refillTimestamp.getTime() > refillRate) {
    bucketRecord.refillTimestamp = new Date(current);
    bucketRecord.tokensUsed = 1;
    await bucketRLRepository.save(bucketRecord);

    return true;
  }

  const tokensUsed = bucketRecord.tokensUsed;
  if (tokensUsed >= bucketMaxSize) {
    return false;
  }

  bucketRecord.tokensUsed += 1;
  await bucketRLRepository.save(bucketRecord);
  return true;
}
