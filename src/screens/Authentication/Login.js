import React from "react";
import { styles } from "./styles";
import "react-native-gesture-handler";
import { Input, Text } from "react-native-elements";
import { View } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { actions } from '../../store/actions';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch()
  const logIn = async () => {
    let isLogged = (email != null && password != null && password != "")
    ? true
    : false

    try {
      await AsyncStorage.setItem("user", JSON.stringify(isLogged))
    } catch(error){
      console.log(error)
    }
    dispatch(actions.user.setUser(isLogged))
  }
  const getEmail = (newEmail) => {
      setEmail(newEmail)
  }

  const getPassword = (newPassword) => {
    setPassword(newPassword)
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title_text}>Si ya tienes una cuenta, inicia sesión!</Text>
        </View>
      <View>
        <Input
          onChangeText={(value) => getEmail(value) }
          placeholder="tuemail@gmail.com"
          leftIcon={{ type: "font-awesome", name: "user" }}
          label={<Text>Ingrese Email</Text>}
        />
        <Input
          onChangeText={(value) => getPassword(value) }
          placeholder="contraseña"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          label={<Text>Ingrese contraseña</Text>}
        />

        <TouchableOpacity style={styles["loginBtn"]}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
