import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button } from "../components/ui";
import { useSelector, useDispatch } from "react-redux";
import { editEmail } from "../store/authSlice";
import { useForm, FormProvider } from "react-hook-form";
import { editEmailSchema } from "../components/forms/validation/editEmailSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../components/forms/FormInput";
import { PasswordInput } from "../components/ui";
import { AppDispatch } from "../store/store";
import { selectEmail } from "../store/authSelectors";

type EditEmailFormData = {
  email: string;
  confirmPassword: string;
};

export const EditEmailScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentEmail = useSelector(selectEmail);
  const methods = useForm<EditEmailFormData>({
    mode: "onChange",
    resolver: yupResolver(editEmailSchema(currentEmail, "")),
    defaultValues: {
      email: currentEmail,
      confirmPassword: "",
    },
  });

  const { watch, handleSubmit, formState } = methods;
  const newEmail = watch("email");

  const onSubmit = (data: EditEmailFormData) => {
    dispatch(editEmail(data.email));
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
              onPress={handleSubmit(onSubmit)}
              variant="primary"
              disabled={
                !formState.isValid || methods.watch("email") === currentEmail
              }
            />
          </Box>
        </FormProvider>
      </Box>
    </SafeAreaView>
  );
};
