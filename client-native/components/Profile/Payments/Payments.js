import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, Card, Button, Title, Deadline } from './Payments.Styles'
import logo from '../../../assets/mercado-pago.png'
import axios from 'axios'
import IP from "../../Ips"
import * as WebBrowser from 'expo-web-browser';


export default function Payments() {
    useEffect(() => {
        setStatus(pago.paystatus ===  "PAGO" ? true : false)
    }, [])
    const pago = useSelector((state) => state.reducerUser.user)
    const [status, setStatus] = useState()
    let paymentday = pago.paymentday.split('-') 



    const handleProfile = async () => await WebBrowser.openBrowserAsync()
    const pay = async () => {
        try {
            const res = await axios.post(`https://${IP}:3001/api/mercadopago/pay`)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <View>
                <Title style>
                    Próximos pagos
                </Title>
                <Card style={{backgroundColor: status ? '#6AE056' : '#CEFA1F', borderRadius: 12}}>
                    <Text>$1000</Text>
                </Card>
                <Title>Vencimientos</Title>
                <Deadline>
                    <Text>{paymentday[1]}/{paymentday[0]}</Text>
                    <Text style={{marginLeft: 150}}>$1000</Text>
                </Deadline>
            </View>
            <Button onPress={()=> pay()}>
                <Image source={logo} style={{width: 75, height: 19.5}}/>
            </Button>
        </Container>
    )
}
