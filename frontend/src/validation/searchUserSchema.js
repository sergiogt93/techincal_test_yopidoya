import * as yup from "yup";

export const searchSchema = yup.object({
  username: yup.string().required(),
});
