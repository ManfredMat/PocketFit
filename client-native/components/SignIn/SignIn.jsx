import React, { useState } from "react";
import { Button, Text, TextInputComponent, View } from "react-native";
import { Input } from "react-native-elements";

const SignIn = ({navigation}) => {

    const [state, setState] = useState({user:'', password: ''});

    const handleOnChangeUser = (value) => {
        
        setState({...state, user: value});

    }

    const handleOnChangePass = (value) => {
        
        setState({...state, password: value});
        console.log(state);

    }

    const handleOnPress = () => {
        navigation.navigate("Inicio")
    }

    const validateUserAndPass = () => {
        if(state.user.length < 1 || state.password.length < 1) return true;
        else return false
    } 

    return(

    <View>
        <View>

            <View>
                <Text>Bienvenido a PocketFit!!</Text>
            </View>

            <View>
                <Text>Email</Text>
                <Input placeholder="Email o Usuario" leftIcon={{ type: 'font-awesome', name: 'user' }} onChangeText={handleOnChangeUser}/>
            </View>

            <View>
                <Text>Contraseña</Text>
                <Input name="password" secureTextEntry={true} placeholder="Contraseña" leftIcon={{ type: 'font-awesome', name: 'lock' }} onChangeText={handleOnChangePass}/>
            </View>

            <Button disabled={state.user.length < 1 || state.password.length < 1} title="Iniciar Sesión" onPress={handleOnPress}></Button>
        </View>
    </View>

    )

}

export default SignIn;
