import { useState } from "react";
import { FormInput } from "../forms/FormInput";
import { Pressable } from "react-native";
import { EyeIcon, EyeOffIcon } from "./icons";

type PasswordInputProps = {
  name: string;
  placeholder?: string;
  label?: string;
  autoComplete?: "password" | "password-new" | "off";
  textContentType?: "password" | "newPassword" | "emailAddress"; //IOS
};

export const PasswordInput = ({
  name,
  placeholder = "Password",
  label,
  autoComplete = "password-new",
  textContentType = "newPassword",
}: PasswordInputProps) => {
  const [secure, setSecure] = useState(true);

  return (
    <FormInput
      name={name}
      placeholder={placeholder}
      label={label}
      secureTextEntry={secure}
      autoComplete={autoComplete}
      textContentType={textContentType}
      rightIcon={
        <Pressable onPress={() => setSecure(!secure)}>
          {secure ? <EyeOffIcon /> : <EyeIcon />}
        </Pressable>
      }
    />
  );
};
