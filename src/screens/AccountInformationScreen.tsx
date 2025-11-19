import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text, Button } from "../components/ui";
import { useAppNavigation } from "../hooks/useAppNavigation";

export const AccountInformationScreen = () => {
  const navigation = useAppNavigation();

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
      <Box gap="m">
        <Button
          label="Edit Personal Information"
          onPress={() => navigation.navigate("EditPersonalInfo")}
          variant="primary"
        />
        <Button
          label="Edit Email"
          onPress={() => navigation.navigate("EditEmail")}
          variant="primary"
        />
        <Button
          label="Change Password"
          onPress={() => navigation.navigate("ChangePassword")}
          variant="primary"
        />
      </Box>
    </SafeAreaView>
  );
};
