import { Card, CardProps } from "./Card";
import { useNavigation } from "@react-navigation/native";
import { ParamListBase, NavigationProp } from "@react-navigation/native";

type ListItemProps<T, Screen extends string = string> = {
  item: T;
  to: Screen;
  params?: (item: T) => any;
  children: (item: T) => React.ReactNode;
} & Omit<CardProps, "onPress" | "children">;

export const ListItem = <T, Screen extends string = string>({
  item,
  to,
  params,
  children,
  ...cardProps
}: ListItemProps<T, Screen>) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handlePress = () => {
    const navParams = params ? params(item) : undefined;
    navigation.navigate(to as any, navParams);
  };

  return (
    <Card onPress={handlePress} {...cardProps}>
      {children(item)}
    </Card>
  );
};
