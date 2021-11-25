import { useNavigation } from '@react-navigation/core'
import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Icon } from 'react-native-elements';


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
                    <Input 
                        placeholder= 'Nombre' 
                        value={input.name} 
                        onChange={(e)=>handleInputChange(e, 'name')} 
                        leftIcon={{ type: 'font-awesome', name: 'user' }}
                    />
                    <Input 
                        placeholder= 'E-mail' value={input.email} 
                        onChange={(e)=>handleInputChange(e, 'email')}  
                        leftIcon={<Icon name='mail'/>}
                    />
                    <Input 
                        placeholder= 'Contraseña' 
                        value={input.password} 
                        onChange={(e)=>handleInputChange(e,'password')} 
                        secureTextEntry={true} leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    />
                    <Input 
                        placeholder= 'Repetir Contraseña' 
                        value={input.repeatPassword} 
                        onChange={(e)=>handleInputChange(e,'repeatPassword')} 
                        secureTextEntry={true} leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    />
                    <Button 
                        title='Registrarse' 
                        onPress={()=>navigation.navigate('Inicio')}
                    />
                </View>
            </View>
        )
 }

