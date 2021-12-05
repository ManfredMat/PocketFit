import React from 'react'
import { View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux';
import Styles from './Profile.styles';

const Profile = () => {
    const user = useSelector((state) => state.reducerUser.user);
    
    return (
        <Styles.Container>
            <Styles.Text style={{alignSelf:"flex-end", margin: 10}}>Editar</Styles.Text>
            <Image 
                 source={{uri: user.imageData? `data:image/jpeg;base64, ${user.imageData}` : 'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png'}} 
                 style={{width: 150, height: 150, marginTop: 40, alignSelf: 'center', borderRadius: 9999}}
            />
            <Styles.Text style={{alignSelf:"center", marginTop: 20, fontSize: 25}}>{user.name + " " + user.lastname}</Styles.Text>
            <Styles.Text style={{alignSelf:"center", fontSize: 15}}>E-Mail: {user.email}</Styles.Text>
            <Styles.Text style={{alignSelf:"center", fontSize: 15}}>Número: {user.number? user.number : "Desconocido"}</Styles.Text>

            <Styles.CardGreen style={{height:'25%' ,padding: 10, marginHorizontal: 50, marginTop: 20}}>
                <Styles.Text style={{alignSelf:"center", color: "black"}}>Clases</Styles.Text>
            </Styles.CardGreen>

            {/* <Styles.Text style={{alignSelf:"center", fontSize: 15, marginTop: 30}}>Pagar</Styles.Text> */}

            <View style={{marginTop: 100, display:"flex", flexDirection:"row", justifyContent:"space-between", marginHorizontal:40}}>
                <Styles.Text style={{fontSize: 15}}>Feedback</Styles.Text>
                <Styles.Text style={{fontSize: 15}}>Configuración</Styles.Text>
            </View>
        </Styles.Container>
    )
}

export default Profile

