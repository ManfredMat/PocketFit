import { useNavigation } from '@react-navigation/core'
import React, { Component, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
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
                    <View>
                        <Text>Nombre</Text>
                        <Input 
                            inputContainerStyle={{borderBottomWidth:0}}
                            placeholder= 'Usuario' 
                            value={input.name} 
                            onChange={(e)=>handleInputChange(e, 'name')} 
                        />

                        <Text>E-mail</Text>
                        <Input 
                            inputContainerStyle={{borderBottomWidth:0}}
                            placeholder= 'user@example.com' value={input.email} 
                            onChange={(e)=>handleInputChange(e, 'email')}  
                        />

                        <Text>Contraseña</Text>
                        <Input 
                            inputContainerStyle={{borderBottomWidth:0}}
                            placeholder= '**********'
                            value={input.password} 
                            onChange={(e)=>handleInputChange(e,'password')} 
                            secureTextEntry={true} 
                        />

                        <Text>Repetir Contraseña</Text>
                        <Input 
                            inputContainerStyle={{borderBottomWidth:0}}
                            placeholder= '**********' 
                            value={input.repeatPassword} 
                            onChange={(e)=>handleInputChange(e,'repeatPassword')} 
                            secureTextEntry={true} 
                        />
                    </View>
                        <TouchableOpacity onPress={()=> navigation.navigate('Inicio')}>
                            <SvgXml xml={ButtonSignUp}/>
                        </TouchableOpacity>
            </View>
        )
 }

