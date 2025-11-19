import * as yup from "yup";
import {
  FULLNAME_REGEX,
  PHONE_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../../../constants/validation";
const baseSchema = {
  fullName: yup
    .string()
    .optional()
    .default("") //without this yupResolver --> string | undefined
    .trim()
    .matches(FULLNAME_REGEX, "Invalid name format"),
  phoneNumber: yup.string().optional().default("").trim().matches(PHONE_REGEX, {
    message: "Invalid phone format",
    excludeEmptyString: true,
  }),
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
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),

  terms: yup
    .boolean()
    .required("You must accept the terms")
    .oneOf([true], "You must accept the Terms and Conditions"),
};

export const signUpSchema = yup.object(baseSchema);

export const signUpStep1Schema = yup.object({
  fullName: baseSchema.fullName,
  phoneNumber: baseSchema.phoneNumber,
});

export const signUpStep2Schema = yup.object({
  email: baseSchema.email,
  password: baseSchema.password,
  confirmPassword: baseSchema.confirmPassword,
  terms: baseSchema.terms,
});
