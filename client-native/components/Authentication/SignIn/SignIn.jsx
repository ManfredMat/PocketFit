import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";
import { ButtonGreen } from "../AuthenticatioStyled";
import { Styles } from '../AuthenticatioStyled';
import { useSelector, useDispatch } from "react-redux";
import signIn from "../../../redux/Actions/actions-User";
import postLoginUser from "../../../api/post-login";

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducerUser.user);
  const [state, setState] = useState({ email: "", password: "" });

  const handleOnChange = (e, type) => {
    setState({
      ...state,
      [type]: e.nativeEvent.text,
    });
  };

  const handleOnSubmit = async () => {
    try {
      let datos = {
        email: state.email,
        password: state.password
      };

      const res = await postLoginUser(datos);
      dispatch(signIn(res.data.passport.user));

      navigation.navigate("Inicio");
    } catch (e) {
      alert("No se pudo iniciar sesión");
    }
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
            placeholder="Email"
            value={state.email}
            onChange={(e) => handleOnChange(e, "email")}
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
          disabled={state.email.length < 1 || state.password.length < 1}
          onPress={() => handleOnSubmit()}
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
