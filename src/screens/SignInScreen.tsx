import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../contexts/AuthContext";

export const SignInScreen = () => {
  const { login } = useAuth();

  const handleSignIn = () => {
    console.log("SignIn pressed");
    login();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>
      <Text style={styles.subtitle}>Sign in</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
  },
  subtitle: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#5EDE99",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
