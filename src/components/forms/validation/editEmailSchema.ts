import * as yup from "yup";
import { EMAIL_REGEX } from "../../../constants/validation";

export const editEmailSchema = (
  currentEmail: string,
  currentPassword: string
) =>
  yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format")
      .matches(EMAIL_REGEX, "Enter a valid email address")
      .test(
        "not-same-as-current",
        "New email must be different from current",
        (value) => value !== currentEmail
      ),

    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .test(
        "match-current-password",
        "Incorrect password",
        (value) => value === currentPassword
      ),
  });
