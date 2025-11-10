import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../contexts/AuthContext";
import { ProfileStackParamList } from "../navigation/types";

type ProfileScreenProps = NativeStackScreenProps<
  ProfileStackParamList,
  "Profile"
>;

export const ProfileScreen = ({}: ProfileScreenProps) => {
  const { isAuthorized, logout } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} backgroundColor="mainBackground" padding="l">
        <Text variant="headerXL" marginBottom="l" textAlign="center">
          Profile
        </Text>

        <Box
          backgroundColor="cardBackground"
          padding="m"
          borderRadius={12}
          marginBottom="l"
          alignItems="center"
        >
          <Text variant="subtitle" color="textSecondary" marginBottom="s">
            Status
          </Text>
          <Text
            variant="headerLarge"
            color={isAuthorized ? "success" : "danger"}
          >
            {isAuthorized ? "Authorized" : "Not Authorized"}
          </Text>
        </Box>

        <Box gap="m">
          <Button
            label="Account Information"
            onPress={() => console.log(" Account Info Screen")}
            variant="primary"
          />

          <Button
            label="Logout"
            onPress={() => {
              console.log("Logout pressed");
              logout();
            }}
            variant="danger"
            marginTop="s"
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};
