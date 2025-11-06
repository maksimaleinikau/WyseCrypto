import { TouchableOpacity } from "react-native";
import { Input, InputProps } from "./Input";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "./icons";

export interface PasswordInputProps
  extends Omit<InputProps, "rightIcon" | "secureTextEntry"> {}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const rightIcon = (
    <TouchableOpacity onPress={togglePasswordVisibility}>
      {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
    </TouchableOpacity>
  );

  return (
    <Input
      {...props}
      secureTextEntry={!isPasswordVisible}
      rightIcon={rightIcon}
    />
  );
};
