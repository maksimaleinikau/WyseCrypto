import * as yup from "yup";

const baseSchema = {
  fullName: yup
    .string()
    .optional()
    .default("") //without this yupResolver --> string | undefined
    .trim()
    .matches(/^[A-Za-z\s'-]*$/, "Invalid name format"),
  phoneNumber: yup
    .string()
    .optional()
    .default("")
    .trim()
    .matches(/^\+[0-9]{10,15}$/, {
      message: "Invalid phone format",
      excludeEmptyString: true,
    }),
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
