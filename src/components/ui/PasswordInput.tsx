import { useState } from "react";
import { FormInput } from "../forms/FormInput";
import { Pressable } from "react-native";
import { EyeIcon, EyeOffIcon } from "./icons";

type PasswordInputProps = {
  name: string;
  placeholder?: string;
};

export const PasswordInput = ({
  name,
  placeholder = "Password",
}: PasswordInputProps) => {
  const [secure, setSecure] = useState(true);

  return (
    <FormInput
      name={name}
      placeholder={placeholder}
      secureTextEntry={secure}
      onValueChange={(text: string) => {}} //temp
      rightIcon={
        <Pressable onPress={() => setSecure(!secure)}>
          {secure ? <EyeOffIcon /> : <EyeIcon />}
        </Pressable>
      }
    />
  );
};
