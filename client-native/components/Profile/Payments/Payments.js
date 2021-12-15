import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Container, Card, Button } from './Payments.Styles'


export default function Payments() {
    return (
        <Container>
            <View>
                <Text style={{color: "#fff", fontSize: 20, marginTop: 20, marginBottom: 6}}>
                    Próximos pagos
                </Text>
                <Card>
                    <Text>1000p</Text>
                    <Text>Fecha límite 17/12</Text>
                </Card>
            </View>
            <Button>
                <Text>Mercado Pago</Text>
            </Button>
        </Container>
    )
}
