import { Input, InputProps } from "./Input";

export type TextAreaProps = InputProps;

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return <Input {...props} multiline />;
};
