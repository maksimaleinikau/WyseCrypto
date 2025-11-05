import { Badge, Button, Input, Upload } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";

export const TemporaryScreen = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
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
