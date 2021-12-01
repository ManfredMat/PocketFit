import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import postRegisterUser from "../../../api/post-register";
import { ButtonGreen, Label } from "../Authentication.styles";
import { Styles } from "../Authentication.styles";
import { useSelector, useDispatch } from "react-redux";
import signIn from "../../../redux/Actions/actions-User";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducerUser.user);

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const DateGenerate = () => {
    const date = new Date();
    const format = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getUTCDate()}`;
    return format;
  };

  const validatorEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true
    else return false
  }

  const handleInputChange = (e, type) => {
    setInput({
      ...input,
      [type]: e.nativeEvent.text,
    });
  };

  const handleOnSubmit = async () => {
    try {
      if (input.name.length > 1 && input.lastname.length > 1 && input.email.length > 1 && input.password.length > 1 && input.repeatPassword.length > 1) {

        if (!validatorEmail(input.email)) return Alert.alert("Error", "Email inválido")
        if (input.password !== input.repeatPassword) return Alert.alert("Error", "Las contraseñas no coinciden")

      } else return Alert.alert("Error", "Por favor completa todos los campos")

      const datos = {
        paymentday: DateGenerate(),
        name: input.name,
        lastname: input.lastname,
        email: input.email,
        password: input.password,
      };
      const res = await postRegisterUser(datos);
      dispatch(signIn(res.data));

      if (res.data === "User is already registered") {
        Alert.alert("Error", "El usuario ya existe")
      } else {
        storeEmail(input.email);
        storePassword(input.password);
        setInput({
          name: "",
          lastname: "",
          email: "",
          password: "",
          repeatPassword: ""
        })
        navigation.navigate("Inicio")
        Alert.alert(`Bienvenido ${input.name}!`, "Te has registrado correctamente")
      };
    } catch (e) {
      Alert.alert("Error", "No se pudo registrar");
    }
  };

  const storeEmail = async (value) => {
    await AsyncStorage.setItem('email', value)
  };

  const storePassword = async (value) => {
    await AsyncStorage.setItem('password', value)
  };


  return (
    <View>
      <View style={{ width: 300, marginTop: 5 }}>
        <Label>Nombre</Label>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="Nombre"
          value={input.name}
          onChange={(e) => handleInputChange(e, "name")}
          textContentType="name"
        />

        <Label>Apellido</Label>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="Apellido"
          value={input.lastname}
          onChange={(e) => handleInputChange(e, "lastname")}
        />

        <Label>E-mail</Label>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="user@example.com"
          value={input.email}
          onChange={(e) => handleInputChange(e, "email")}
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <Label>Contraseña</Label>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="**********"
          value={input.password}
          onChange={(e) => handleInputChange(e, "password")}
          secureTextEntry={true}
        />

        <Label>Repetir Contraseña</Label>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="**********"
          value={input.repeatPassword}
          onChange={(e) => handleInputChange(e, "repeatPassword")}
          secureTextEntry={true}
          textContentType="password"
        />
      </View>
      <View>
        <ButtonGreen
          onPress={() => handleOnSubmit()}
        >
          <Text style={{ alignSelf: "center", fontFamily: "Poppins_500Medium" }}>Registrarse</Text>
        </ButtonGreen>
      </View>
    </View>
  );
}
