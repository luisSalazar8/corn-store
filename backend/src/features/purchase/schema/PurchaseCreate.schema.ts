import Joi from "joi";

export const purchaseCreateSchema = Joi.object({
  purchaseID: Joi.string().required(),
});
