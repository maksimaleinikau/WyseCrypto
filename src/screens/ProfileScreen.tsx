import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../contexts/AuthContext";
export const ProfileScreen = () => {
  const { isAuthorized, logout } = useAuth();
  const handleLogout = () => {
    console.log("logout pressed");
    logout();
  };
  return (
    <View
      style={{ marginTop: 200, justifyContent: "center", alignItems: "center" }}
    >
      <Text>ProfileScreen</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.status}>
          Status: {isAuthorized ? "Authorized" : "Not Authorized"}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  status: {
    fontSize: 16,
    marginBottom: 10,
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
