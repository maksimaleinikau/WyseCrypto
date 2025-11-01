import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../contexts/AuthContext";

export const MainScreen = () => {
  const { isAuthorized, logout } = useAuth();
  const handleLogout = () => {
    console.log("logout pressed");
    logout();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main App</Text>
      <Text>Status: {isAuthorized ? "Authorized" : "Not Authorized"}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
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
    fontSize: 20,
  },
  status: {
    fontSize: 16,
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
