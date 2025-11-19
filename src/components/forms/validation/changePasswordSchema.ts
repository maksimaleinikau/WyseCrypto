import * as yup from "yup";
import { PASSWORD_REGEX } from "../../../constants/validation";

export const changePasswordSchema = (currentPassword: string) =>
  yup.object({
    oldPassword: yup
      .string()
      .required("Current password is required")
      .test(
        "match-current",
        "Incorrect current password",
        (value) => value === currentPassword
      ),

    newPassword: yup
      .string()
      .required("New password is required")
      .test("strong-password", "Password is too weak", (value) => {
        if (!value || value.length < 8) return false;
        return (
          PASSWORD_REGEX.uppercase.test(value) &&
          PASSWORD_REGEX.lowercase.test(value) &&
          PASSWORD_REGEX.number.test(value) &&
          PASSWORD_REGEX.special.test(value)
        );
      })
      .notOneOf(
        [yup.ref("oldPassword")],
        "New password must be different from old"
      ),

    confirmPassword: yup
      .string()
      .required("Please confirm new password")
      .oneOf([yup.ref("newPassword")], "Passwords do not match"),
  });
