import React, { useState } from "react";
import { Box, Text, Button, LogoIcon } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../components/forms/FormInput";
import { PasswordInput } from "../components/ui";
import { useDispatch } from "react-redux";
import { signUpSchema } from "../components/forms/validation/signUpSchema";
import { FormCheckBox } from "../components/forms/FormCheckBox";
import { AppDispatch } from "../store/store";
import { signIn } from "../store/accountActions";

type SignUpFormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export const SignUpScreen = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const dispatch = useDispatch<AppDispatch>();

  const methods = useForm<SignUpFormData>({
    mode: "onChange",
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const {
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { isValid, errors },
  } = methods;

  const step1HasErrors = !!errors.fullName || !!errors.phoneNumber;
  const step2HasErrors =
    !!errors.email ||
    !!errors.password ||
    !!errors.confirmPassword ||
    !!errors.terms;

  const terms = watch("terms");

  const onSubmit = (data: SignUpFormData) => {
    const { confirmPassword, ...userData } = data; // no need to send confirmPassword

    dispatch(
      signIn({
        email: data.email,
        fullName: data.fullName || undefined,
        phoneNumber: data.phoneNumber || undefined,
        password: data.password,
      })
    );

    console.log("Account created", userData);
  };

  const handleContinue = async () => {
    const ok = await trigger(["fullName", "phoneNumber"]);
    if (ok) setStep(2);
  };

  const handleCreateAccount = async () => {
    const ok = await trigger(["email", "password", "confirmPassword", "terms"]);
    if (ok) {
      const data = methods.getValues();
      onSubmit(data);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        flex={1}
        justifyContent="center"
        padding="m"
        backgroundColor="mainBackground"
      >
        <Box alignItems="center" marginBottom="m">
          <Box flexDirection="row" alignItems="center" marginBottom="4xl">
            <LogoIcon />
            <Text
              color="textPrimary"
              variant="headerXXL"
              style={{
                marginTop: 19,
                includeFontPadding: false,
              }}
            >
              Wisecrypto
            </Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            gap="s"
            marginBottom="2xl"
          >
            <Text variant="headerXXL" color="textPrimary">
              Register Now
            </Text>
            <Text color="textFourtiary" variant="subtitle">
              Trusted by millions of users worldwide
            </Text>
          </Box>
        </Box>
        <FormProvider {...methods}>
          <Box gap="m">
            <Box width="100%" gap="m">
              {step === 1 && (
                <>
                  <FormInput
                    name="fullName"
                    placeholder="Full Name (optional)"
                    label="Full Name"
                    autoComplete="name"
                    textContentType="name"
                  />
                  <FormInput
                    name="phoneNumber"
                    placeholder="Phone Number (e.g. +375291231412)"
                    keyboardType="phone-pad"
                    label="Phone Number"
                    autoComplete="tel"
                    textContentType="telephoneNumber"
                  />
                  <Button
                    label="Continue"
                    onPress={handleContinue}
                    variant="primary"
                    disabled={step1HasErrors}
                  />
                  <Button
                    label="Skip"
                    onPress={() => setStep(2)}
                    variant="secondary"
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <FormInput
                    name="email"
                    placeholder="example@gmail.com"
                    keyboardType="email-address"
                    autoComplete="email"
                    textContentType="emailAddress"
                    label="Email"
                  />
                  <PasswordInput
                    name="password"
                    placeholder="Enter Password"
                    label="Password"
                    autoComplete="password"
                    textContentType="emailAddress"
                  />
                  <PasswordInput
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    autoComplete="password"
                    textContentType="newPassword"
                  />
                  <FormCheckBox
                    name="terms"
                    label={
                      <Text variant="checkBoxLabel" color="textPrimary">
                        I agree to the{" "}
                        <Text color="textFourtiary">
                          Terms and Conditions, Privacy Policy{" "}
                        </Text>
                        <Text color="textPrimary">and </Text>
                        <Text color="textFourtiary">Content Policy</Text>
                      </Text>
                    }
                  />

                  <Button
                    label="Create Account"
                    onPress={handleCreateAccount}
                    variant="primary"
                    disabled={step2HasErrors}
                  />
                  <Button
                    label="Back"
                    onPress={() => setStep(1)}
                    variant="secondary"
                  />
                </>
              )}
            </Box>
          </Box>
        </FormProvider>
      </Box>
    </SafeAreaView>
  );
};
