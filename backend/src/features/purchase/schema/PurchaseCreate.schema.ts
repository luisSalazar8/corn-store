import Joi from "joi";

export const purchaseCreateSchema = Joi.object({
  productID: Joi.string().required(),
});
