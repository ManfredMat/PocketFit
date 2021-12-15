import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, Card, Button } from './Payments.Styles'


export default function Payments() {
    const pago = useSelector((state) => state.reducerUser.user)
   ' pago.paystatus'
    let paymentday = pago.paymentday.split('-')
    return (
        <Container>
            <View>
                <Text style={{color: "#fff", fontSize: 20, marginTop: 20, marginBottom: 6}}>
                    Próximos pagos
                </Text>
                <Card>
                    <Text>1000p</Text>
                    <Text>Fecha límite {paymentday[1]}/{paymentday[0]}</Text>
                </Card>
            </View>
            <Button>
                <Text>Mercado Pago</Text>
            </Button>
        </Container>
    )
}
