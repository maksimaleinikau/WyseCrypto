import { useController, useFormContext } from "react-hook-form";
import { Input, InputProps } from "../ui/Input";

type FormInputProps = InputProps & {
  name: string;
};

export const FormInput = ({ name, ...inputProps }: FormInputProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Input
      {...inputProps}
      value={value || ""}
      onValueChange={(text) => {
        onChange(text);
        inputProps.onValueChange?.(text);
      }}
      onBlur={onBlur}
      errorMessage={error?.message}
    />
  );
};
