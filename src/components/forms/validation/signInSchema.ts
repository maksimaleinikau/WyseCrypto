import * as yup from "yup";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../constants/validation";

export const signInSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(EMAIL_REGEX, "Enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 symbols")
    .matches(PASSWORD_REGEX.uppercase, "must contain an uppercase letter")
    .matches(PASSWORD_REGEX.lowercase, "must contain a lowercase letter")
    .matches(PASSWORD_REGEX.number, "must contain a number")
    .matches(PASSWORD_REGEX.special, "must contain a special symbol"),
});
