import * as yup from "yup";

export const singInShema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Incorrect email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Incorrect email format"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 symbols")
    .matches(/[A-Z]/, "must contain uppercase letter")
    .matches(/[a-z]/, "must contain lowercase letter")
    .matches(/[0-9]/, "must contain a number")
    .matches(/[!@#$%^&*():|<>{}]/, "must contain a special symbol"),
});
