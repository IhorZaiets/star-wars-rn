import React, { FC } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CharacterScreen from "../../character/screens/CharacterScreen";
import { StackRoutes } from "../types";

import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator: FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={StackRoutes.MAIN} component={TabNavigator} />
      <Stack.Screen
        name={StackRoutes.CHARACTER_SCREEN}
        component={CharacterScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
