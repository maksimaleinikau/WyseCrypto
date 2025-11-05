import { Badge, Box, Button, Text } from "../components/ui";
import {
  LogoutIcon,
  NotificationIcon,
  WalletIcon,
  DeleteIcon,
} from "../components/ui";

import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../components/ui/Input";

export const TemporaryScreen = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
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
        <Input label="Default" placeholder="Введите имя" />
        <Input
          label="Password"
          variant="focused"
          placeholder="enter PASSWORD"
          type="password"
        />
        <Input placeholder="Search" type="search" label="Search" />
        <Badge
          label="Badge"
          statuses={{
            success: 52516516,
            pending: "In Progress",
            failure: 115525,
          }}
        />
        <Button
          variant="primary"
          label="Button"
          borderWidth={2}
          borderColor="danger"
          onPress={() => console.log("Pressed")}
        ></Button>
        <Button
          variant="secondary"
          label="Button"
          onPress={() => console.log("Pressed")}
        ></Button>
        <Button
          variant="danger"
          label="Button"
          onPress={() => console.log("Pressed")}
        ></Button>
        <Button
          variant="disabled"
          label="Button"
          onPress={() => console.log("Pressed")}
        ></Button>
      </SafeAreaView>
    </>
  );
};
