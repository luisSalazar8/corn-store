import { Request, Response, NextFunction } from "express";
import { admin } from "../services/firebase";

export interface AuthenticatedRequest extends Request {
  firebaseUser?: admin.auth.DecodedIdToken;
}

export const firebaseAuthMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Missing or invalid token" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.firebaseUser = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err });
    return;
  }
};
