import { Router } from "express";
import { validateRequest } from "../middleware/validateRequest";
import { userRegisterSchema } from "../features/users/schema/UserRegister.schema";
import { createUser } from "../features/users/User.service";

const router = Router();

router.post(
  "/user",
  validateRequest({ body: userRegisterSchema }),
  async (req, res) => {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  }
);

export default { path: "/users", router };
