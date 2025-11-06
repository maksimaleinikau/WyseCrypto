import { Button, Input, Upload, Checkbox, Card, Badge } from "../components/ui";
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
        <Upload onPress={() => console.log("Upload pressed")} />
        <Input label="RadioButton" placeholder="Text" withRadio={true} />
        <Input label="Default" placeholder="Enter name" />
        <Input
          label="Password"
          variant="focused"
          placeholder="Enter Password"
          type="password"
        />
        <Input placeholder="Search" type="search" label="Search" />
        <Input
          placeholder="Enter description"
          type="textarea"
          label="Textarea"
        />
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
