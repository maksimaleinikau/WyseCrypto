import { Box } from "../components/ui/Box";
import DeleteIcon from "../components/ui/icons/DeleteIcon";
import LogoutIcon from "../components/ui/icons/LogoutIcon";
import NotificationIcon from "../components/ui/icons/NotificationIcon";
import WalletIcon from "../components/ui/icons/WalletIcon";
import { Text } from "../components/ui/Text";

export const TemporaryScreen = () => {
  return (
    <>
      <Box
        flex={1}
        backgroundColor="mainBackground"
        padding="l"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          backgroundColor="secondary"
          justifyContent="center"
          alignItems="center"
          borderRadius={10}
          padding="xl"
        >
          <Text color="primary">Test color</Text>
          <Text variant="headerLarge">Test text variant</Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <LogoutIcon />
          <NotificationIcon />
          <WalletIcon />
          <DeleteIcon />
        </Box>
      </Box>
    </>
  );
};
