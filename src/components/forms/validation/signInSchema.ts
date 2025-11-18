import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address"
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 symbols")
    .matches(/[A-Z]/, "must contain an uppercase letter")
    .matches(/[a-z]/, "must contain a lowercase letter")
    .matches(/[0-9]/, "must contain a number")
    .matches(/[!@#$%^&*():|<>{}]/, "must contain a special symbol"),
});
