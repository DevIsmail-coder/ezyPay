import * as yup from "yup";

export const ResetPasswordSchema = yup
  .object({
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Confirm Password is required"),
  })
  .required();