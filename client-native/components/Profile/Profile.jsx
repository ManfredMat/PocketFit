import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Styles from './Profile.styles';
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import IP from "../Ips";
import editProfile from "../../assets/editprofilephoto.png";
import getUserId from "../../api/get-user";
import getUser from '../../redux/Actions/actions-getUser';

const Profile = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const user = useSelector((state) => state.reducerUser.user);
    const [previewImage, setPreviewImage] = useState(null);

    let image;

    const logOut = async () => {
        await AsyncStorage.removeItem("isLogged");
        navigation.navigate('Authentication');
        Alert.alert("", "Sesión cerrada exitosamente");
    }

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
            image = result.uri
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

        setPreviewImage(image);
        await axios.put(`http://${IP}:3001/api/users/${user.id}`, data, {
            headers: { "Content-Type": `multipart/form-data` }
        })

        const res = await getUserId(user.id);
        dispatch(getUser(res.data));
    }


    return (
        <Styles.Container>
            <Styles.ProfileImage
                source={
                    previewImage ?
                        { uri: previewImage } :
                        user.imageData ?
                            { uri: `data:image/jpeg;base64, ${user.imageData}` } :
                            require('../../assets/userIcon.png')
                }
            />

            <TouchableOpacity onPress={() => imagePickerPermissions()} style={{ top: -28, right: -200 }}>
                <Image source={editProfile} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>

            <Styles.UserName>{user.name + " " + user.lastname}</Styles.UserName>

            <Styles.InfoContainer>
                <Styles.InfoText style={{ marginLeft: 15 }}>Mail</Styles.InfoText>
                <Styles.InfoText style={{ marginRight: 15 }}>{user.email}</Styles.InfoText>
            </Styles.InfoContainer>

            <Styles.InfoContainer style={{ marginBottom: 30 }}>
                <Styles.InfoText style={{ marginLeft: 15 }}>Número</Styles.InfoText>
                <Styles.InfoText style={{ marginRight: 15 }}>{user.phoneNumber ? `+54 9 ${user.phoneNumber}` : "Desconocido"}</Styles.InfoText>
            </Styles.InfoContainer>

            <Styles.ProfileButtonsContainer>
                <Styles.YellowButton style={{ width: 90, marginRight: 5 }}>
                    <Styles.ButtonText style={{ alignSelf: "center" }}>Editar</Styles.ButtonText>
                </Styles.YellowButton>

                <Styles.GreenButton style={{ width: 130, marginLeft: 5 }} onPress={() =>
                    Alert.alert('Cerrar Sesión', '¿Esta seguro?',
                        [{ text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'Si', onPress: () => logOut() }], { cancelable: false })}>
                    <Styles.ButtonText style={{ alignSelf: 'center' }}>Cerrar Sesión</Styles.ButtonText>
                </Styles.GreenButton>
            </Styles.ProfileButtonsContainer>

            <Styles.AccountButtonsContainer style={{ marginTop: 30 }} onPress={() => navigation.navigate('Payments')}>
                <Styles.AccountButtonsSubContainer>
                    <Styles.AccountImageButton style={{ width: 28, height: 20, marginLeft: 15 }} source={require("../../assets/pay-icon.png")} />
                    <Styles.AccountText>Pagar</Styles.AccountText>
                </Styles.AccountButtonsSubContainer>
                <Styles.Arrow>{">"}</Styles.Arrow>
            </Styles.AccountButtonsContainer>

            <Styles.AccountButtonsContainer onPress={() => navigation.navigate("Configuration")}>
                <Styles.AccountButtonsSubContainer>
                    <Styles.AccountImageButton style={{ marginLeft: 15 }} source={require("../../assets/config-icon.png")} />
                    <Styles.AccountText>Configuración</Styles.AccountText>
                </Styles.AccountButtonsSubContainer>
                <Styles.Arrow>{">"}</Styles.Arrow>
            </Styles.AccountButtonsContainer>

            <Styles.AccountButtonsContainer>
                <Styles.AccountButtonsSubContainer>
                    <Styles.AccountImageButton style={{ marginLeft: 15 }} source={require("../../assets/feedback-icon.png")} />
                    <Styles.AccountText>FeedBack</Styles.AccountText>
                </Styles.AccountButtonsSubContainer>
                <Styles.Arrow>{">"}</Styles.Arrow>
            </Styles.AccountButtonsContainer>

        </Styles.Container>
    )
}

export default Profile

