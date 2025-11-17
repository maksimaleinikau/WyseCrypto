import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../contexts/AuthContext";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "../components/forms/FormInput";
import { PasswordInput } from "../components/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { singInShema } from "../components/forms/validations/authShema";

type SignInFormProps = { email: string; password: string };

export const SignInScreen = () => {
  const { login } = useAuth();
  const methods = useForm<SignInFormProps>({
    resolver: yupResolver(singInShema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = methods;

  const handleSignIn = (data: SignInFormProps) => {
    console.log(data.email, data.password);
    login(data.email, data.password);
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
        <Text variant="headerLarge" color="textPrimary" marginBottom="m">
          WELCOME
        </Text>

        <Text variant="subtitle" color="textSecondary" marginBottom="xl">
          Sign in
        </Text>
        <FormProvider {...methods}>
          <Box width="100%">
            <FormInput
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
            />

            <PasswordInput name="password" placeholder="Password" />
          </Box>

          <Button
            label={isSubmitting ? "Entry..." : "Sign In"}
            onPress={handleSubmit(handleSignIn)}
            variant="primary"
            disabled={!isValid}
          />
        </FormProvider>
      </Box>
    </SafeAreaView>
  );
};
