import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../navigation";

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootParamList>>();
