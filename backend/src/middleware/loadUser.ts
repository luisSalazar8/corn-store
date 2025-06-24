import { Request, Response, NextFunction } from "express";
import { User } from "../database/entities/mainDB/User";
import { fetchUserByField } from "../features/users/User.service";

export interface RequestWithUser extends Request {
  user?: User;
}

export function createLoadUser(
  source: string,
  sourceField: string,
  dbField: keyof User
) {
  return async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const sourceObj = (req as any)[source];
      if (!sourceObj || !sourceObj[sourceField]) {
        res
          .status(400)
          .json({ message: `Missing user identifier in ${source}` });
        return;
      }

      const value = sourceObj[sourceField];
      const user = await fetchUserByField(dbField, value);

      req.user = user;
      next();
    } catch (err) {
      res.status(500).json({ message: "Failed to load user", error: err });
      return;
    }
  };
}
