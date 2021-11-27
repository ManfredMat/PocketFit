
import React, { Component, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Input, Button } from "react-native-elements";
import postUser from "../../../api/post-login"
import { ButtonGreen } from "../AuthenticatioStyled";
import { Styles } from '../AuthenticatioStyled'



export default function SignUp() {

  const [input, setInput] = useState({
    name: "",
    lastname: '',
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [send, setSend] = useState({
    paymentday:""
  });


  React.useEffect(()=>{handleOnSubmit()},[])

  const DateGenerate = () => {
    const date = new Date();
    const format = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getUTCDate()}`;
    return format;
  };

  const handleInputChange = (e, type) => {
    setInput({
      ...input,
      [type]: e.nativeEvent.text,
    });
    console.log(input)
  };

  const handleOnSubmit = async () =>{
   let datos = {
    paymentday: DateGenerate(),
    name: input.name,
    lastname: input.lastname,
    email: input.email,
    password: input.password,
  }

  const res = await postUser(datos)

  console.log(res)

  }

  return (
    <View>
      <View>
        <Text style={{color:'#C0C6CC'}}>Nombre</Text>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="Nombre"
          value={input.name}
          onChange={(e) => handleInputChange(e, "name")}
        />

        <Text style={{color:'#C0C6CC'}}>Apellido</Text>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="Apellido"
          value={input.lastname}
          onChange={(e) => handleInputChange(e, "lastname")}
        />

        <Text style={{color:'#C0C6CC'}}>E-mail</Text>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="user@example.com"
          value={input.email}
          onChange={(e) => handleInputChange(e, "email")}
        />

        <Text style={{color:'#C0C6CC'}}>Contraseña</Text>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="**********"
          value={input.password}
          onChange={(e) => handleInputChange(e, "password")}
          secureTextEntry={true}
        />

        <Text style={{color:'#C0C6CC'}}>Repetir Contraseña</Text>
        <Input
          style={Styles.Input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          placeholder="**********"
          value={input.repeatPassword}
          onChange={(e) => handleInputChange(e, "repeatPassword")}
          secureTextEntry={true}
        />
      </View>
      <View>
        <ButtonGreen onPress={() => handleOnSubmit()}>
            <Text>Registrarse</Text>
        </ButtonGreen>
      </View>
    </View>
  );
}
