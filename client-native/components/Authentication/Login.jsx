import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { Icon } from 'react-native-elements';

export default function Login() {
    const navigation = useNavigation()
    return (
        <View>
            <Input 
                placeholder='usuario'
                leftIcon={<Icon name='mail'/>}
            />
            <Input 
                placeholder='contraseña' 
                secureTextEntry={true} 
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
            />

            <Button title='Iniciar Sesion' onPress={()=>navigation.navigate('Inicio')}/>
            <Button title='Registrarse' onPress={()=>navigation.navigate('SingUp')}/>
        </View>
    )
}
