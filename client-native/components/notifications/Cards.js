import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Container, Title, Message, Content} from './notificationsStyles'
import logo from '../../assets/fitnessgym.png'
import { Image } from 'react-native-elements'
export default function Cards({title, message}) {
    const [color, setColor] = useState(false)
    return (
       <TouchableOpacity onPress={()=> setColor(true)}>
        <Container style={{backgroundColor: !color ?'#CEFA1F' : '#E4FC82'}}>
            <Image source={logo} style={{width:50, height:30}} />
            <Message>
                <Title>{title}</Title>
                <Content>{message}</Content>
            </Message>
        </Container>
      </TouchableOpacity>
    )
}
