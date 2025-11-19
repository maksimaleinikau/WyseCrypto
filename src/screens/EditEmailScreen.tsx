import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button } from "../components/ui";
import { useAuth } from "../contexts/AuthContext";
import { useForm, FormProvider } from "react-hook-form";
import { editEmailSchema } from "../components/forms/validation/editEmailSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../components/forms/FormInput";
import { PasswordInput } from "../components/ui";

type EditEmailFormData = {
  email: string;
  confirmPassword: string;
};
export const EditEmailScreen = () => {
  const { user } = useAuth();
  const methods = useForm<EditEmailFormData>({
    mode: "onChange",
    resolver: yupResolver(
      editEmailSchema(user?.email || "", user?.password || "") //current data
    ),
    defaultValues: {
      email: user?.email || "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: EditEmailFormData) => {
    console.log("Saved:", data);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding="m"
        backgroundColor="mainBackground"
      >
        <FormProvider {...methods}>
          <Box width="100%" gap="m">
            <FormInput
              name="email"
              placeholder="example@gmail.com"
              keyboardType="email-address"
              autoComplete="email"
              textContentType="emailAddress"
              label="Email"
            />
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Password"
              label="Confirm Password"
              autoComplete="password"
              textContentType="newPassword"
            />
            <Button
              label="Change Email"
              onPress={methods.handleSubmit(onSubmit)}
              variant="primary"
              disabled={
                !methods.formState.isValid ||
                methods.watch("email") === user?.email
              }
            />
          </Box>
        </FormProvider>
      </Box>
    </SafeAreaView>
  );
};
