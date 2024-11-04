import * as yup from 'yup'

export const SignUpSchema = yup
  .object({
    business_name: yup.string().required("Business Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    PhoneNumber: yup.string().required("Phone number is required"),
    business_address: yup.string().required("Business Address is required"),

  })
  .required()