import Joi from "joi";

export const purchaseParamSchema = Joi.object({
  id: Joi.string().required(),
});
