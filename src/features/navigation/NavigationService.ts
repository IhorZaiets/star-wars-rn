import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigationParamList } from "./types";

export const useAppNavigation = (): StackNavigationProp<NavigationParamList> =>
  useNavigation<StackNavigationProp<NavigationParamList>>();
