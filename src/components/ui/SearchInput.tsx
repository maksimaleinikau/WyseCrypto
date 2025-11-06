import { SearchIcon } from "./icons";
import { Input, InputProps } from "./Input";

export interface SearchInputProps extends Omit<InputProps, "rightIcon"> {}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  return <Input {...props} rightIcon={<SearchIcon />} />;
};
