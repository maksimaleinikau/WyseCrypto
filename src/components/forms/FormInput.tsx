import { useController, useFormContext } from "react-hook-form";
import { Input, InputProps } from "../ui/Input";

type FormInputProps = InputProps & {
  name: string;
  onSync?: () => void;
};

export const FormInput = ({ name, onSync, ...inputProps }: FormInputProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Input
      {...inputProps}
      value={value || ""}
      onValueChange={onChange}
      onBlur={onBlur}
      errorMessage={error?.message}
    />
  );
};
