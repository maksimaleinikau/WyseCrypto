import { FormInput } from "../forms/FormInput";
import { SearchIcon } from "./icons";
import { Pressable } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";
import { useFormContext } from "react-hook-form";

export type SearchInputProps = {
  name: string;
  placeholder?: string;
  label?: string;
};

export const SearchInput = ({ name, placeholder, label }: SearchInputProps) => {
  const { watch, setValue } = useFormContext();
  const value = watch(name) || "";
  const hasValue = value.length > 0;
  const handleClear = () => {
    setValue(name, "");
  };

  return (
    <Box position="relative">
      <FormInput
        name={name}
        placeholder={placeholder || "Search..."}
        label={label}
        rightIcon={<SearchIcon />}
      />
      {hasValue && (
        <Pressable
          onPress={handleClear}
          style={{ position: "absolute", right: 42, top: 12 }}
        >
          <Text color="textTertiary">X</Text>
        </Pressable>
      )}
    </Box>
  );
};
