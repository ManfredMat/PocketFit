import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import Styles from './Profile.styles';
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import IP from "../Ips"
import editProfile from "../../assets/editprofilephoto.png"

const Profile = () => {
    const navigation = useNavigation();
    const user = useSelector((state) => state.reducerUser.user);
    const [image, setImage] = useState(null);

    const logOut = async () => {
        await AsyncStorage.removeItem("isLogged");
        navigation.navigate('Authentication')
        Alert.alert("", "Sesión cerrada exitosamente");
    }

    //hay un problema con las promesas :(

    const imagePickerPermissions = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                return Alert.alert("Error", "Necesita autorizar los permisos para que podamos cambiar su foto de perfil");
            }
        }

        pickImage();
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri)
            sendImage()
        }
    };

    const sendImage = async () => {
        const data = new FormData();
        data.append("photo", {
            name: "prueba",
            uri: image,
            type: "image/jpeg"
        });

        await axios.put(`http://${IP}:3001/api/users/${user.id}`, data, { headers: { "Content-Type": `multipart/form-data` } })

    }


    return (
        <Styles.Container>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Styles.GreenButton style={{ margin: 15 }} onPress={() => logOut()}>
                    <Styles.Text style={{ alignSelf: "center", color: "black" }}>Cerrar Sesión</Styles.Text>
                </Styles.GreenButton>
                <Styles.GreenButton style={{ margin: 15 }}>
                    <Styles.Text style={{ alignSelf: "center", color: "black" }}>Editar Perfil</Styles.Text>
                </Styles.GreenButton>
            </View>
            <Image
                source={{ uri: image ? image : user.imageData ? `data:image/jpeg;base64, ${user.imageData}` : 'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png' }}
                style={{ width: 150, height: 150, marginTop: 40, alignSelf: 'center', borderRadius: 9999, backgroundColor: "white" }}
            />
            <TouchableOpacity onPress={() => imagePickerPermissions()} style={{ top: -35, right: -230 }}>
                <Image source={editProfile} style={{ height: 35, width: 35 }} />
            </TouchableOpacity>
            <Styles.Text style={{ alignSelf: "center", marginTop: 20, fontSize: 25 }}>{user.name + " " + user.lastname}</Styles.Text>
            <Styles.Text style={{ alignSelf: "center", fontSize: 15 }}>E-Mail: {user.email}</Styles.Text>
            <Styles.Text style={{ alignSelf: "center", fontSize: 15 }}>Número: {user.number ? user.number : "Desconocido"}</Styles.Text>

            <Styles.CardGreen style={{ height: '25%', padding: 10, marginHorizontal: 50, marginTop: 20 }}>
                <Styles.Text style={{ alignSelf: "center", color: "black" }}>Clases</Styles.Text>
            </Styles.CardGreen>

            {/* <Styles.Text style={{alignSelf:"center", fontSize: 15, marginTop: 30}}>Pagar</Styles.Text> */}

            <View style={{ marginTop: 55, flex: 1, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 40 }}>
                <Styles.Text style={{ fontSize: 15 }}>Feedback</Styles.Text>
                <Styles.Text style={{ fontSize: 15 }}>Configuración</Styles.Text>
            </View>
        </Styles.Container>
    )
}

export default Profile

