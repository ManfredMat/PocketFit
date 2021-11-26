import React, { useState } from "react";
import { Button, Text, TextInputComponent, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";
import tw from 'tailwind-react-native-classnames'
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

    <View style={tw`m-5 content-center`}>
        <View>
            <View>
                <Text style={tw`ml-4 text-gray-300`}>E-mail</Text>
                <Input inputContainerStyle={{borderBottomWidth:0}} style={tw`bg-gray-400 bg-opacity-40 pl-2 rounded-3xl text-sm`} placeholder="Email o Usuario" onChangeText={handleOnChangeUser}/>
            </View>

            <View>
                <Text style={tw`ml-4 text-gray-300`}>Contraseña</Text>
                <Input inputContainerStyle={{borderBottomWidth:0}} style={tw`bg-gray-400 bg-opacity-40 pl-2 rounded-3xl text-sm`} name="password" secureTextEntry={true} placeholder="Contraseña" onChangeText={handleOnChangePass}/>
            </View>
            </View >
            <View style={tw`self-center mt-3`}>
                <TouchableOpacity disabled={state.user.length < 1 || state.password.length < 1} onPress={() => handleOnPress()}>
                    <SvgXml xml={ButtonSignIn}/>
                </TouchableOpacity>
            </View>
            <View style={tw`self-center mt-5`}>
                <Text>Olvode mi Contraseña</Text>
            </View>
    </View>

    )

}

export default SignIn;
