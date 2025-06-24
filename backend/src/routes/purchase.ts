import { Router } from "express";
import { firebaseAuthMiddleware } from "../middleware/firebaseAuth";
import { loadUser, RequestWithUser } from "../middleware/loadUser";
import { validateRequest } from "../middleware/validateRequest";
import { purchaseCreateSchema } from "../features/purchase/schema/PurchaseCreate.schema";
import {
  createPurchase,
  getPurchasedItemAmount,
} from "../features/purchase/Purchase.service";
import { purchaseParamSchema } from "../features/purchase/schema/PurchaseParam.schema";

const router = Router();

router.post(
  "/",
  firebaseAuthMiddleware,
  loadUser("firebaseUser", "uid", "authUID"),
  validateRequest({ body: purchaseCreateSchema }),
  async (req: RequestWithUser, res) => {
    const { productID } = req.body;
    const user = req.user;
    const newPurchase = createPurchase({ productID, userID: user!.id });

    res.status(201).json(newPurchase);
  }
);

router.get(
  "/:id",
  firebaseAuthMiddleware,
  loadUser("firebaseUser", "uid", "authUID"),
  validateRequest({ params: purchaseParamSchema }),
  async (req: RequestWithUser, res) => {
    const { id } = req.params;
    const user = req.user;
    const newPurchase = getPurchasedItemAmount(id, user!.id);

    res.status(200).json({ amout: newPurchase });
  }
);

export default { path: "/purchase", router };
