import { Card, CardProps } from "./Card";
import { useNavigation } from "@react-navigation/native";
import { ParamListBase, NavigationProp } from "@react-navigation/native";
import { Pressable } from "react-native";
type ListItemProps<T, Screen extends string = string> = {
  item: T;
  to: Screen;
  params?: (item: T) => any;
  children: React.ReactNode;
} & Omit<CardProps, "children">;

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
    <Pressable onPress={handlePress}>
      <Card {...cardProps}>{children}</Card>
    </Pressable>
  );
};
