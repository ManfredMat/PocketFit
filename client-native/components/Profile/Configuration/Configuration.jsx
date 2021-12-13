import axios from 'axios';
import React, { useState } from 'react'
import { View, Text, StatusBar, Alert } from 'react-native'
import { Switch } from 'react-native-elements/dist/switch/switch';
import { useSelector } from 'react-redux';
import Styles from './Configuration.styles';
import IP from "../../Ips"
import NotificationsComponent from './Notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";


const Configuration = () => {
    
    const navigation = useNavigation();
    const user = useSelector(state => state.reducerUser.user)
    //logOut
    const logOut = async () => {
        await AsyncStorage.removeItem("isLogged");
        navigation.navigate('Authentication');
        Alert.alert("", "Sesión cerrada exitosamente");
    }
    //switch newSletter
    const [isEnabled, setIsEnabled] = useState(user.newsletter);
    const toggleSwitch = async () => {
        setIsEnabled(previousState => !previousState);
        isEnabled ? newsletterUnsuscribe() : newsletterSuscribe()
    }

    const newsletterSuscribe = async () => {
        await axios.put(`http://${IP}:3001/api/news/subscribenews`, { id: user.id })
    }

    const newsletterUnsuscribe = async () => {
        await axios.put(`http://${IP}:3001/api/news/unsubscribenews`, { id: user.id })
    }


    return (
        <Styles.Container>
            <Styles.NewsletterContainer>
                <Styles.Text>Newsletter</Styles.Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#6AE056" }}
                    thumbColor="white"
                    onValueChange={() => toggleSwitch()}
                    value={isEnabled}
                />
            </Styles.NewsletterContainer>
            <Styles.NewsletterContainer>
                <NotificationsComponent/>
            </Styles.NewsletterContainer>
            <Styles.GreenButton style={{ margin: 15 }} onPress={() =>
                  Alert.alert('Cerrar Sesión', '¿Esta seguro?',
                  [{text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'Si', onPress: () => logOut()}],{ cancelable: false })}>
                    <Text style={{alignSelf: 'center'}}>Cerrar Sesión</Text>
            </Styles.GreenButton>
        </Styles.Container>
    )
}

export default Configuration;
