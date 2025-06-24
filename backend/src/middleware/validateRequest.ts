import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

interface Schemas {
  body?: ObjectSchema;
  query?: ObjectSchema;
  params?: ObjectSchema;
}

export function validateRequest(schemas: Schemas) {
  return (req: Request, res: Response, next: NextFunction) => {
    const sources: (keyof Schemas)[] = ["body", "query", "params"];

    for (const source of sources) {
      const schema = schemas[source];

      if (schema) {
        const { error, value } = schema.validate(req[source], {
          abortEarly: false,
          convert: true,
        });

        if (error) {
          res.status(400).json({
            message: "Validation error",
            source,
            details: error.details.map((d) => d.message),
          });

          return;
        }

        req[source] = value;
      }
    }

    next();
  };
}
