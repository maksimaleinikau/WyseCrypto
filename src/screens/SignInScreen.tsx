import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "../components/forms/FormInput";
import { PasswordInput } from "../components/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../components/forms/validation/signInSchema";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthStackParamlist } from "../navigation";
import { Theme } from "../theme";
import { useTheme } from "@shopify/restyle";
import { LogoIcon } from "../components/ui";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { signIn } from "../store/accountActions";

type SignInFormData = { email: string; password: string };

export const SignInScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme<Theme>();
  const navigation = useNavigation<NavigationProp<AuthStackParamlist>>();
  const methods = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const handleSignIn = (data: SignInFormData) => {
    console.log(data);
    dispatch(
      signIn({
        email: data.email,
        password: data.password,
      })
    );
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
          gap="xs"
          marginBottom="2xl"
        >
          <Text variant="headerXXL" color="textPrimary">
            Welcome
          </Text>
          <Text color="textFourtiary" variant="subtitle">
            Trusted by millions of users worldwide
          </Text>
        </Box>
        <FormProvider {...methods}>
          <Box width="100%">
            <FormInput
              name="email"
              placeholder="example@gmail.com"
              keyboardType="email-address"
              autoComplete="email"
              autoCorrect={false}
              label="Email"
            />

            <PasswordInput
              name="password"
              placeholder="Enter Password"
              label="Password"
              autoComplete="password"
            />
          </Box>

          <Button
            label="Sign In"
            onPress={handleSubmit(handleSignIn)}
            variant="primary"
            disabled={!isValid}
          />
          <Box alignItems="center">
            <Text color="primary" textAlign="center" variant="subtitle">
              Don't have an account yet?{" "}
              <Text
                variant="subtitle"
                color="primary"
                onPress={() => navigation.navigate("SignUp")}
                style={{
                  textDecorationLine: "underline",
                  textDecorationColor: theme.colors.primary,
                }}
              >
                Register here
              </Text>
            </Text>
          </Box>
        </FormProvider>
      </Box>
    </SafeAreaView>
  );
};
