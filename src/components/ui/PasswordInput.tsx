import { useState } from "react";
import { FormInput } from "../forms/FormInput";
import { Pressable } from "react-native";
import { EyeIcon, EyeOffIcon } from "./icons";

type PasswordInputProps = {
  name: string;
  placeholder?: string;
  label?: string;
};

export const PasswordInput = ({
  name,
  placeholder = "Password",
  label,
}: PasswordInputProps) => {
  const [secure, setSecure] = useState(true);

  return (
    <FormInput
      name={name}
      placeholder={placeholder}
      label={label}
      secureTextEntry={secure}
      rightIcon={
        <Pressable onPress={() => setSecure(!secure)}>
          {secure ? <EyeOffIcon /> : <EyeIcon />}
        </Pressable>
      }
    />
  );
};
