import React, { Component, useCallback } from "react";
import { MENU_ITEMS } from "../../constants";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";

export default Home = (props) => {
  const changeScreen = (to) => {
    to === "Home"
      ? Alert.alert(`Ya te encuentras en la sección ${to}`)
      : props.navigation.navigate(to);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.backgroundWallpaper} source={require('../../assets/wallpaper.jpg')}>
      {MENU_ITEMS.map((item) => (
        <TouchableOpacity
          key={`${item.screen}screen`}
          style={styles.btn}
          onPress={() => changeScreen(item.screen)}
        >
          <Text style={styles.text}>{item.screen}</Text>
        </TouchableOpacity>
      ))}
      </ImageBackground>
    </SafeAreaView>
  );
};
