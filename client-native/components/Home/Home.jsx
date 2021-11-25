import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Home() {
    return (
        <View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                 source={{uri:'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png'}} 
                 style={{width: 50, height: 50, margin: 3}}/>
                <Text style={{marginLeft: 10, fontSize: 25}}>Hola Usuario!</Text>
            </View>

            <View style={{backgroundColor: '#fff', padding: 20, margin: 10}}> 
                <Text>Estadisticas</Text>
            </View>
            
            <View style={{backgroundColor: '#fff', height:'40%' ,padding: 20, margin: 10}}>
                <Text>Newsletter</Text>
            </View>
            <View style={{backgroundColor: '#fff', height:'20%', padding: 20, margin: 10}}>
                <Text>Tu rutina</Text>
            </View>
        </View>
    )
}
