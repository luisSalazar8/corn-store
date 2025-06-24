import { Router } from "express";
import { firebaseAuthMiddleware } from "../middleware/firebaseAuth";
import { createLoadUser, RequestWithUser } from "../middleware/loadUser";
import { validateRequest } from "../middleware/validateRequest";
import { purchaseCreateSchema } from "../features/purchase/schema/PurchaseCreate.schema";
import { createPurchase } from "../features/purchase/Purchase.service";

const router = Router();

router.post(
  "/",
  firebaseAuthMiddleware,
  createLoadUser("firebaseUser", "uid", "authUID"),
  validateRequest({ body: purchaseCreateSchema }),
  async (req: RequestWithUser, res) => {
    const { productID } = req.body;
    const user = req.user;
    const newPurchase = createPurchase({ productID, userID: user!.id });

    res.status(201).json(newPurchase);
  }
);

export default { path: "/purchase", router };
