import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button } from "../components/ui";
import { useSelector, useDispatch } from "react-redux";
import { changePassword } from "../store/authSlice";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "../components/forms/validation/changePasswordSchema";
import { PasswordInput } from "../components/ui";
import { AppDispatch, RootState } from "../store/store";
import { selectCurrentPassword } from "../store/authSelectors";

type ChangePasswordFormData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const ChangePasswordScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentPassword = useSelector(selectCurrentPassword);
  const methods = useForm<ChangePasswordFormData>({
    mode: "onChange",
    resolver: yupResolver(changePasswordSchema(currentPassword)),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, formState } = methods;

  const onSubmit = (data: ChangePasswordFormData) => {
    dispatch(changePassword(data.newPassword));
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
              onPress={handleSubmit(onSubmit)}
              variant="primary"
              disabled={!formState.isValid}
            />
          </Box>
        </FormProvider>
      </Box>
    </SafeAreaView>
  );
};
