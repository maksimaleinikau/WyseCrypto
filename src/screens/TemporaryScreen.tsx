import {
  Button,
  Input,
  Upload,
  Checkbox,
  Card,
  Badge,
  PasswordInput,
  SearchInput,
  TextArea,
} from "../components/ui";
import { Text } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";

export const TemporaryScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
        <Card>
          <Text variant="headerLarge">Text in Card</Text>
        </Card>
        <Checkbox
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
        />
        <TextArea placeholder="A lot of text" />
        <Upload onPress={() => console.log("Upload pressed")} />
        <Input placeholder="Default Input" />
        <Input placeholder="Disabled" variant="disabled" />
        <PasswordInput
          placeholder="Enter Password"
          label="Password"
          errorMessage="Invalid Password"
        />
        <SearchInput />
        <Badge
          variant="pending"
          label="Pending"
          onPress={() => console.log("Badge pressed")}
        />
        <Badge
          variant="success"
          label="Success!"
          onPress={() => console.log("Badge pressed")}
        />
        <Badge
          variant="failure"
          label="Failure!"
          onPress={() => console.log("Badge pressed")}
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
      </SafeAreaView>
    </>
  );
};
