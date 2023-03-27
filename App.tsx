import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components/native";

import StackNavigator from "./src/features/navigation/components/StachNavigator";
import { store } from "./src/store/store";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <StackNavigator />
      </Provider>
    </ThemeProvider>
  );
}
