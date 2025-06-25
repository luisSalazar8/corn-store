import { AppSource } from "../../database";
import { Product } from "../../database/entities/mainDB/Product";

export async function getProducts() {
  const purchaseRepository = AppSource.getRepository(Product);
  const products = await purchaseRepository.find();

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    image: product.image,
  }));
}
