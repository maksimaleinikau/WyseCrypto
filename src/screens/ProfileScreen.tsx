import { Box, Text, Button } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { LogoutModal } from "../components/modals";
import { useAppNavigation } from "../hooks/useAppNavigation";

export const ProfileScreen = () => {
  const navigation = useAppNavigation();
  const { logout } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    logout();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} backgroundColor="mainBackground" padding="l">
        <Text variant="headerXL" marginBottom="l" textAlign="center">
          Profile
        </Text>

        <Box gap="m">
          <Button
            label="Account Information"
            onPress={() => navigation.navigate("AccountInformation")}
            variant="primary"
          />

          <Button
            label="Logout"
            onPress={() => setModalVisible(true)}
            variant="danger"
            marginTop="s"
          />
        </Box>
        <LogoutModal
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onConfirm={handleLogout}
        />
      </Box>
    </SafeAreaView>
  );
};
