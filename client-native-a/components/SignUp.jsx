import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'


export default class SignUp extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>Registrarse</Text>
                    <Input/>
                    <Input/>
                    <Input/>
                    <Input/>
                    <Button/>
                </View>
            </View>
        )
    }
}
