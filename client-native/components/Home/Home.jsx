import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";
import Styles from './Home.styles';


export default function Home() {
    const user = useSelector((state) => state.reducerUser.user);
    const storeData = async (value) => {
        await AsyncStorage.setItem('isLogged', value);
    };

    storeData("true");

    return (
        <Styles.Container>
            <ScrollView>
                <Styles.HeaderContainer>
                    <Styles.ProfileImage
                        source={
                            user.imageData ?
                                { uri: `data:image/jpeg;base64, ${user.imageData}` } :
                                require('../../assets/userIcon.png')
                        }
                    />
                    <Styles.NameLogoContainer style={{ marginLeft: 25 }}>
                        <Styles.HeaderText>Hola {user.name}!</Styles.HeaderText>
                        <Styles.GymLogo source={require("../../assets/fitnessgym-logo-home.png")} />
                    </Styles.NameLogoContainer>
                </Styles.HeaderContainer>

                <Styles.Card style={{ backgroundColor: '#6AE056', height: 150, padding: 20, margin: 10 }}>
                    <Styles.TextBlack>Eventos</Styles.TextBlack>
                </Styles.Card>

                <Styles.Card style={{ backgroundColor: '#CEFA1F', height: 150, padding: 20, margin: 10 }}>
                    <Styles.TextBlack>Rutina</Styles.TextBlack>
                </Styles.Card>
            </ScrollView>
        </Styles.Container>
    )
}
