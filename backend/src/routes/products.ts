import { Router } from "express";
import { firebaseAuthMiddleware } from "../middleware/firebaseAuth";
import { getProducts } from "../features/product/Product.service";

const router = Router();

router.get("/", firebaseAuthMiddleware, async (req, res) => {
  const products = await getProducts();

  res.status(200).json(products);
});

export default { path: "/product", router };
