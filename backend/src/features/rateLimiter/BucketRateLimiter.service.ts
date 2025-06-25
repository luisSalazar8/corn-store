import { AppSource } from "../../database";
import { BucketRateLimit } from "../../database/entities/mainDB/BucketRateLimit";

export async function CheckLimit(userID: string): Promise<boolean> {
  const refillRate = Number(process.env.RL_BUCKET_REFILL);
  const bucketMaxSize = Number(process.env.RL_BUCKET_SIZE);

  if (isNaN(refillRate) || isNaN(bucketMaxSize)) {
    throw new Error("Rate limit config missing or invalid.");
  }

  const hasTokenAccess = await AppSource.transaction(async (manager) => {
    const bucketRLRepository = manager.getRepository(BucketRateLimit);

    const bucketRecord = await bucketRLRepository.findOne({
      where: { user: { id: userID } },
      lock: { mode: "pessimistic_write" },
    });

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
    const elapsedTime = current - refillTimestamp.getTime();
    if (elapsedTime > refillRate) {
      const newTokensBasedOnTime = Math.floor(elapsedTime / refillRate);
      if (newTokensBasedOnTime > 0) {
        bucketRecord.tokensUsed = Math.max(
          bucketRecord.tokensUsed - newTokensBasedOnTime,
          0
        );
      }

      bucketRecord.refillTimestamp = new Date(
        refillTimestamp.getTime() + newTokensBasedOnTime * refillRate
      );
    }

    if (bucketRecord.tokensUsed >= bucketMaxSize) {
      return false;
    }

    bucketRecord.tokensUsed += 1;
    await bucketRLRepository.save(bucketRecord);

    return true;
  });

  return hasTokenAccess;
}
