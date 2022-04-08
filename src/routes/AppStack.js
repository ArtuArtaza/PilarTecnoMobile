import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Authentication/Login";
import Home from "../screens/Home";
import List from "../screens/List"
import MapScreen from "../screens/Map"
import Profile from "../screens/Profile";
import { useSelector } from "react-redux";
const Stack = createStackNavigator();
export default AppStack = (props) => {
  const user = useSelector(state => state.user.user)
  return (
    <Stack.Navigator>
      {
        true ? <Stack.Screen name="Login" component={Login} options={{headerTitleAlign:'center'}}/>
        :
        <>
        <Stack.Screen name="Home" component={Home} options={{headerTitleAlign:'center'}}/>
      <Stack.Screen name="List" component={List} options={{headerTitleAlign:'center'}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerTitleAlign:'center'}}/>
      <Stack.Screen name="Map" component={MapScreen} options={{headerTitleAlign:'center'}}/>
        </>
    }
    </Stack.Navigator>
  );
};
