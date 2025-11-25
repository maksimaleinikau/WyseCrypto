import { Modal } from "react-native";
import { Box, Text, Button, Card, InfoCircleIcon } from "../ui";

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
        <Card padding="xxl" flexDirection="column" alignItems="center" gap="l">
          <InfoCircleIcon />
          <Text
            variant="modalText"
            color="textSecondary"
            textAlign="center"
            marginBottom="xl"
          >
            Are you sure you want to log out?
          </Text>

          <Box flexDirection="row" gap="m">
            <Button
              label="Cancel"
              onPress={onCancel}
              variant="danger"
              flex={1}
            />
            <Button
              label="Logout"
              onPress={onConfirm}
              variant="confirm"
              flex={1}
            />
          </Box>
        </Card>
      </Box>
    </Modal>
  );
};
