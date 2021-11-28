import React from 'react'
import { View, Text, Image } from 'react-native'

const Profile = () => {
    return (
        <View>
            <Text style={{alignSelf:"flex-end", margin: 10}}>Editar</Text>
            <Image 
                 source={{uri:'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png'}} 
                 style={{width: 100, height: 100, marginTop: 40, alignSelf: 'center'}}
            />
            <Text style={{alignSelf:"center", marginTop: 20, fontSize: 25}}>Nombre</Text>
            <Text style={{alignSelf:"center", fontSize: 15}}>E-Mail: usuario@mail.com</Text>
            <Text style={{alignSelf:"center", fontSize: 15}}>Número: +54 9 1132546879</Text>

            <View style={{backgroundColor: '#fff', height:'25%' ,padding: 10, marginHorizontal: 50, marginTop: 20}}>
                <Text style={{alignSelf:"center"}}>Clases</Text>
            </View>

            <Text style={{alignSelf:"center", fontSize: 15, marginTop: 30}}>Pagar</Text>

            <View style={{marginTop: 20, display:"flex", flexDirection:"row", justifyContent:"space-between", marginHorizontal:40}}>
                <Text style={{fontSize: 15}}>Feedback</Text>
                <Text style={{fontSize: 15}}>Configuración</Text>
            </View>
        </View>
    )
}

export default Profile

