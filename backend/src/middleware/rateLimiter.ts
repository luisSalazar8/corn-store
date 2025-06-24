import { Response, NextFunction } from "express";
import { RequestWithUser } from "./loadUser";
import { CheckLimit } from "../features/rateLimiter/BucketRateLimiter.service";

export const rateLimiter = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    const limit = await CheckLimit(user!.id);

    if (!limit) {
      res.status(429).json({ message: "Too Many Requests" });
      return;
    }

    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to load rate limiter data", error: err });
    return;
  }
};
