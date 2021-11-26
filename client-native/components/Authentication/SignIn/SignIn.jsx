import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";
import ButtonSignIn from "../../../assets/ButtonSignIn";
import { SvgXml } from "react-native-svg";

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
      <View>
        <View>
          <Text>E-mail</Text>
          <Input
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Email o Usuario"
            value={state.user}
            onChange={(e) => handleOnChange(e, "user")}
          />
        </View>

        <View>
          <Text>Contraseña</Text>
          <Input
            inputContainerStyle={{ borderBottomWidth: 0 }}
            name="password"
            secureTextEntry={true}
            placeholder="********"
            value={state.password}
            onChange={(e) => handleOnChange(e, "password")}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          disabled={state.user.length < 1 || state.password.length < 1}
          onPress={() => handleOnPress()}
        >
          <SvgXml xml={ButtonSignIn} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Olvide mi Contraseña</Text>
      </View>
    </View>
  );
};

export default SignIn;
