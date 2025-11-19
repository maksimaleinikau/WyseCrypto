import { useController, useFormContext } from "react-hook-form";
import { Checkbox, CheckboxProps } from "../ui";
import { Box, Text } from "../ui";

type FormCheckBoxProps = Omit<CheckboxProps, "checked" | "onPress"> & {
  name: string;
  label?: React.ReactNode;
};

export const FormCheckBox = ({
  name,
  label,
  ...checkBoxProps
}: FormCheckBoxProps) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <>
      <Checkbox
        checked={!!value}
        onPress={() => onChange(!value)}
        label={label}
        {...checkBoxProps}
      />
      {error && (
        <Box marginTop="xs">
          <Text color="danger" variant="subtitle">
            {error.message}
          </Text>
        </Box>
      )}
    </>
  );
};
