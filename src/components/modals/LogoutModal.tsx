import { Modal } from "react-native";
import { Box, Text, Button, Card } from "../ui";

type LogoutModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export const LogoutModal = ({
  visible,
  onCancel,
  onConfirm,
}: LogoutModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <Box flex={1} justifyContent="center" alignItems="center" padding="l">
        <Card padding="l" flexDirection="column">
          <Text
            variant="headerLarge"
            color="textPrimary"
            textAlign="center"
            marginBottom="m"
          >
            Log out
          </Text>

          <Text
            variant="modalText"
            color="textSecondary"
            textAlign="center"
            marginBottom="xl"
          >
            Are you sure you want to log out?
          </Text>

          <Box flexDirection="row" gap="s">
            <Button
              label="Logout"
              onPress={onConfirm}
              variant="danger"
              flex={1}
              paddingVertical="m"
            />
            <Button
              label="Cancel"
              onPress={onCancel}
              variant="secondary"
              flex={1}
              paddingVertical="m"
            />
          </Box>
        </Card>
      </Box>
    </Modal>
  );
};
