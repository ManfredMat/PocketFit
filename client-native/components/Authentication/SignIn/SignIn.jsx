import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { Input } from "react-native-elements";
import { ButtonGreen, Label } from "../Authentication.styles";
import { Styles } from '../Authentication.styles';
import { useSelector, useDispatch } from "react-redux";
import signIn from "../../../redux/Actions/actions-Login";
import postLoginUser from "../../../api/post-login";
import sendMailPassReco from "../../../api/post-passreco-mail";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getEvents } from "../../../redux/Actions/actions-Events";
import { getGeneralRoutine } from "../../../redux/Actions/actions-Routine";

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducerUser.user);
  const [state, setState] = useState({ email: "", password: "" });
  const [render, setRender] = useState(true);

  const validatorEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true
    else return false
  }

  const handleOnChange = (e, type) => {
    setState({
      ...state,
      [type]: e.nativeEvent.text,
    });
  };

  const handleOnSubmit = async () => {
    try {

      if (state.email.length > 1 && state.password.length > 1) {
        if (!validatorEmail(state.email)) return Alert.alert("Error", "Email inválido");
      } else return Alert.alert("Error", "Por favor completa todos los campos");

      const datos = {
        email: state.email,
        password: state.password
      };

      const res = await postLoginUser(datos);
      if (res.data === "Email not found") {
        return Alert.alert("Error", "No se ha encontrado el email en nuestra base de datos");
      } else if (res.data === "Password mismatch") {
        Alert.alert("Error", "La contraseña ingresada es incorrecta")
      } else if (res.data.passport.user.isadmin) {
        return Alert.alert("Error", "Usted es administrador, para continuar ingrese a PocketFit Web")
      } else {
        dispatch(signIn(res.data.passport.user));
        await dispatch(getEvents());
        await dispatch(getGeneralRoutine());
        storeEmail(state.email);
        storePassword(state.password);
        setState({ email: "", password: "" });
        navigation.navigate("Inicio");
      }
    } catch (e) {
      Alert.alert("Error", "No se pudo iniciar sesión");
    }
  };

  const storeEmail = async (value) => {
    await AsyncStorage.setItem('email', value)
  };

  const storePassword = async (value) => {
    await AsyncStorage.setItem('password', value)
  };

  const handleOnSubmitPassReco = async () => {
    if (state.email.length < 1) {
      Alert.alert("Error", "Completa el campo email")
    } else {
      if (validatorEmail(state.email)) {
        mailPassReco({
          email: state.email
        });
      } else {
        alert("Email invalido")
      }
    }
  }

  const mailPassReco = async (mail) => {
    const res = await sendMailPassReco(mail);
    if (res.data === "Something went wrong") return alert("El Email ingresado no coincide con el registrado en la base de datos")
    await AsyncStorage.setItem('recoEmail', state.email);
    setRender(true);
    Alert.alert("Mail enviado, revise su correo y siga las instrucciones");
    setState({ email: "" });
    navigation.navigate("Authentication");
  }

  return (
    <View>
      {
        render ? 
        <View>
          <View style={{ width: 300, marginTop: 5 }}>
            <Label>E-mail</Label>
            <Input
              style={Styles.Input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholder="user@example.com"
              value={state.email}
              onChange={(e) => handleOnChange(e, "email")}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Label>Contraseña</Label>
            <Input
              style={Styles.Input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              name="password"
              secureTextEntry={true}
              placeholder="********"
              value={state.password}
              onChange={(e) => handleOnChange(e, "password")}
              textContentType="password"
            />
          </View>
          <View>
            <ButtonGreen
              onPress={() => handleOnSubmit()}
            >
              <Text style={{ alignSelf: "center", fontFamily: "Poppins_500Medium" }}>Iniciar Sesión</Text>
            </ButtonGreen>
              <TouchableOpacity onPress={() => Alert.alert(
                "Atención", 'Le enviaremos las instrucciones para reestablecer la contraseña al mail asociado a su cuenta',
                [
                  {
                    text: "Cancelar",
                    style: "cancel"
                  },
                  {
                    text: "Aceptar",
                    onPress: () => setRender(false),
                    style: "default"
                  }
                ]
              )}>
                <Text style={{ color: '#6AE056', alignSelf: "center", marginBottom: 20, marginTop: 8, borderBottomWidth: 2, borderStyle: "solid", borderColor: "#6AE056", fontFamily: "Poppins_500Medium" }}>OLVIDE MI CONTRASEÑA</Text>
              </TouchableOpacity>
          </View>
        </View> : 
        <View>
          <View style={{ width: 300, marginTop: 5 }}>
            <Label>E-mail</Label>
            <Input
              style={Styles.Input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholder="user@example.com"
              value={state.email}
              onChange={(e) => handleOnChange(e, "email")}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
          <View>
            <ButtonGreen
              onPress={() => handleOnSubmitPassReco()}
            >
              <Text style={{ alignSelf: "center", fontFamily: "Poppins_500Medium" }}>Enviar</Text>
            </ButtonGreen>
              <TouchableOpacity onPress={() => setRender(true)}>
                <Text style={{ color: '#6AE056', alignSelf: "center", marginBottom: 20, marginTop: 8, borderBottomWidth: 2, borderStyle: "solid", borderColor: "#6AE056", fontFamily: "Poppins_500Medium" }}>VOLVER</Text>
              </TouchableOpacity>
          </View>
        </View>
      }
    </View>
  );
};

export default SignIn;
