import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../contexts/AuthContext";

export const SignInScreen = () => {
  const { login } = useAuth();

  const handleSignIn = () => {
    console.log("SignIn pressed");
    login();
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

        <Button label="Login" onPress={handleSignIn} variant="primary" />
      </Box>
    </SafeAreaView>
  );
};
