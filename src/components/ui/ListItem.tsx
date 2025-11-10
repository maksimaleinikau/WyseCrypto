import { Pressable } from "react-native";
import { Card, CardProps } from "./Card";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "../../navigation";

type ListItemProps<T, Screen extends keyof HomeStackParamList> = {
  item: T;
  to: Screen;
  params?: (item: T) => HomeStackParamList[Screen];
  children: (item: T) => React.ReactNode;
} & Omit<CardProps, "onPress" | "children">;

export const ListItem = <T, Screen extends keyof HomeStackParamList>({
  item,
  to,
  params,
  children,
  ...cardProps
}: ListItemProps<T, Screen>) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

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
