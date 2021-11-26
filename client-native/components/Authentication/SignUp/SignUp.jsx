import { useNavigation } from '@react-navigation/core'
import React, { Component, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import ButtonSignUp from '../../../assets/ButtonSignUp'
import { SvgXml } from 'react-native-svg'


export default function SignUp () {
    const navigation = useNavigation()
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const handleInputChange = (e, type) => {
        setInput({
            ...input,
            [type]: e.nativeEvent.text
        });
    }

        return (
            <View>
                <View style={tw`m-5 content-center h-72`}>
                    <View style={tw`h-5`} >
                        <Text style={tw`ml-4 text-gray-300`}>Nombre</Text>
                        <Input 
                            inputContainerStyle={{borderBottomWidth:0}}
                            style={tw`bg-gray-400 bg-opacity-40 pl-3 rounded-3xl text-sm`}
                            placeholder= 'Usuario' 
                            value={input.name} 
                            onChange={(e)=>handleInputChange(e, 'name')} 
                        />

                        <Text style={tw`ml-4 text-gray-300`}>E-mail</Text>
                        <Input 
                            inputContainerStyle={{borderBottomWidth:0}}
                            style={tw`bg-gray-400 bg-opacity-40 pl-3 rounded-3xl text-sm`}
                            placeholder= 'user@example.com' value={input.email} 
                            onChange={(e)=>handleInputChange(e, 'email')}  
                        />

                        <Text style={tw`ml-4 text-gray-300`}>Contraseña</Text>
                        <Input 
                            inputContainerStyle={{borderBottomWidth:0}}
                            style={tw`bg-gray-400 bg-opacity-40 pl-3 rounded-3xl text-sm`}
                            placeholder= '**********'
                            value={input.password} 
                            onChange={(e)=>handleInputChange(e,'password')} 
                            secureTextEntry={true} 
                        />

                        <Text style={tw`ml-4 text-gray-300`}>Repetir Contraseña</Text>
                        <Input 
                            inputContainerStyle={{borderBottomWidth:0}}
                            style={tw`bg-gray-400 bg-opacity-40 pl-3 rounded-3xl text-sm`}
                            placeholder= '**********' 
                            value={input.repeatPassword} 
                            onChange={(e)=>handleInputChange(e,'repeatPassword')} 
                            secureTextEntry={true} 
                        />
                    </View>
                </View>
                        <TouchableOpacity style={tw`self-center mb-2`} onPress={()=> navigation.navigate('Inicio')}>
                            <SvgXml xml={ButtonSignUp}/>
                        </TouchableOpacity>
            </View>
        )
 }

