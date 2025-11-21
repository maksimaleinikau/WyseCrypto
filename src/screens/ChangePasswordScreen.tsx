import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button } from "../components/ui";
import { useAuth } from "../contexts/AuthContext";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "../components/forms/validation/changePasswordSchema";
import { PasswordInput } from "../components/ui";

type ChangePasswordFormData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const ChangePasswordScreen = () => {
  const { user } = useAuth();
  const methods = useForm<ChangePasswordFormData>({
    mode: "onChange",
    resolver: yupResolver(changePasswordSchema(user?.password || "")),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ChangePasswordFormData) => {
    console.log("Password changed", data);
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
            <PasswordInput
              name="oldPassword"
              label="Current Password"
              placeholder="Enter current password"
              autoComplete="password"
              textContentType="password"
            />
            <PasswordInput
              name="newPassword"
              label="New Password"
              placeholder="Enter new password"
              autoComplete="password-new"
              textContentType="newPassword"
            />
            <PasswordInput
              name="confirmPassword"
              label="Confirm New Password"
              placeholder="Repeat new password"
              autoComplete="password-new"
              textContentType="newPassword"
            />
            <Button
              label="Change Password"
              onPress={methods.handleSubmit(onSubmit)}
              variant="primary"
              disabled={!methods.formState.isValid}
            />
          </Box>
        </FormProvider>
      </Box>
    </SafeAreaView>
  );
};
