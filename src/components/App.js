import React, { Component, useCallback } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import "react-native-gesture-handler";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import AppStack from "../routes/AppStack";
import { NavigationContainer } from "@react-navigation/native";
export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
