import { useController, useFormContext } from "react-hook-form";
import { Input, InputProps } from "../ui/Input";

type FormInputProps = InputProps & {
  name: string;
};

export const FormInput = ({ name, ...rest }: FormInputProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Input
      {...rest}
      value={value || ""}
      onValueChange={onChange}
      onBlur={onBlur}
      errorMessage={error?.message}
    />
  );
};
