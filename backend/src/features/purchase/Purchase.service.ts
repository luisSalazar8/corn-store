import { AppSource } from "../../database";
import { Purchase } from "../../database/entities/mainDB/Purchase";
import PurchaseDTO from "./dto/Purchase.dto";
import PurchaseCreateDTO from "./dto/PurchaseCreate.dto";

export async function createPurchase(
  data: PurchaseCreateDTO
): Promise<PurchaseDTO> {
  const { productID, userID } = data;

  const purchaseRepository = AppSource.getRepository(Purchase);
  const newUser = purchaseRepository.create({
    user: { id: userID },
    product: { id: productID },
  });
  const result = await purchaseRepository.save(newUser);

  return {
    id: result.id,
  };
}
