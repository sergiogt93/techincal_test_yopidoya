import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup.string().required(),
  token: yup.string().required(),
});
