import React, { useState } from "react";
import { Button, Text, TextInputComponent, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";
import ButtonSignIn from '../../../assets/ButtonSignIn'
import { SvgXml } from 'react-native-svg'

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
                <Text>E-mail</Text>
                <Input inputContainerStyle={{borderBottomWidth:0}} placeholder="Email o Usuario" onChangeText={handleOnChangeUser}/>
            </View>

            <View>
                <Text>Contraseña</Text>
                <Input inputContainerStyle={{borderBottomWidth:0}} name="password" secureTextEntry={true} placeholder="Contraseña" onChangeText={handleOnChangePass}/>
            </View>
            </View >
            <View>
                <TouchableOpacity disabled={state.user.length < 1 || state.password.length < 1} onPress={() => handleOnPress()}>
                    <SvgXml xml={ButtonSignIn}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Olvode mi Contraseña</Text>
            </View>
    </View>

    )

}

export default SignIn;
