import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";
import { ButtonGreen } from "../AuthenticatioStyled";
import { Styles } from '../AuthenticatioStyled'

const SignIn = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({ user: "", password: "" });

  const handleOnChange = (e, type) => {
    setState({
      ...state,
      [type]: e.nativeEvent.text,
    });
    console.log(state);
  };

  const handleOnPress = () => {
    navigation.navigate("Inicio");
  };

  const validateUserAndPass = () => {
    if (state.user.length < 1 || state.password.length < 1) return true;
    else return false;
  };

  return (
    <View>
      <View style>
          <Text style={{color:'#C0C6CC'}}>E-mail</Text>
          <Input
            style={Styles.Input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Email o Usuario"
            value={state.user}
            onChange={(e) => handleOnChange(e, "user")}
          />
          <Text style={{color:'#C0C6CC'}}>Contraseña</Text>
          <Input
            style={Styles.Input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            name="password"
            secureTextEntry={true}
            placeholder="********"
            value={state.password}
            onChange={(e) => handleOnChange(e, "password")}
          />
      </View>
      <View>
        <ButtonGreen
          disabled={state.user.length < 1 || state.password.length < 1}
          onPress={() => handleOnPress()}
        >
          <Text>Iniciar sesión</Text>
        </ButtonGreen>
        <TouchableOpacity onPress={() => alert('que lastima')}>
            <Text style={{color:'#6AE056', alignSelf: "center"}}>Olvide mi Contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
