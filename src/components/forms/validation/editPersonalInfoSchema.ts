import * as yup from "yup";
import { FULLNAME_REGEX, PHONE_REGEX } from "../../../constants/validation";

export const editPersonalInfoSchema = yup.object({
  fullName: yup
    .string()
    .required("Full Name is required")
    .matches(
      FULLNAME_REGEX,
      "Name can only contain letters, spaces, hyphens and apostrophes"
    ),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      PHONE_REGEX,
      "Phone must be in international format: + followed by 15 digits"
    )
    .length(16, "Phone must be exactly 16 characters (+ and 15 digits)"),
});
