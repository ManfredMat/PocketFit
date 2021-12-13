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
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={{ uri: user.imageData ? `data:image/jpeg;base64, ${user.imageData}` : 'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png' }}
                        style={{ width: 50, height: 50, margin: 8, borderRadius: 9999, backgroundColor: "white", borderColor: "#6AE056", borderWidth: 2.5 }}
                    />
                    <Styles.TextWhite style={{ marginLeft: 10, fontSize: 25 }}>Hola {user?.name}!</Styles.TextWhite>
                </View>

                <Styles.Card style={{ backgroundColor: '#d81919', height: 150, padding: 20, margin: 10 }}>
                    <Styles.TextWhite>Estadisticas</Styles.TextWhite>
                </Styles.Card>

                <Styles.Card style={{ backgroundColor: '#6AE056', height: 150, padding: 20, margin: 10 }}>
                    <Styles.TextBlack>Newsletter</Styles.TextBlack>
                </Styles.Card>

                <Styles.Card style={{ backgroundColor: '#CEFA1F', height: 150, padding: 20, margin: 10 }}>
                    <Styles.TextBlack>Tu rutina</Styles.TextBlack>
                </Styles.Card>

                <Styles.Card style={{ backgroundColor: '#c4c4c4', height: 150, padding: 20, margin: 10 }}>
                    <Styles.TextBlack>Clases</Styles.TextBlack>
                </Styles.Card>
            </ScrollView>
        </Styles.Container>
    )
}
