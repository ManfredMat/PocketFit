import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./App-Style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./components/navigator/RootStack";
import InicioStack from "./components/navigator/InicioStack";
import store from "./redux/store";
import { Provider } from "react-redux";
import Shifts from "./components/Shifts/Shifts";
import PassReco from "./components/Authentication/SignIn/PassReco";
import Configuration from "./components/Profile/Configuration/Configuration";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic
} from '@expo-google-fonts/poppins';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Notification } from "expo-notifications";
import * as Permissions from 'expo-permissions'
import Payments from "./components/Profile/Payments/Payments";


export default function App() {
  const Stack = createNativeStackNavigator();
  const [log, setLog] = useState(true)

  let [fontsLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Auth' component={RootStack} options={{ headerShown: false }} />
            <Stack.Screen name='PassReco' component={PassReco} options={{ headerShown: false }} />
            <Stack.Screen name='Inicio' component={InicioStack} options={{ headerShown: false }} />
            <Stack.Screen name="Configuration" component={Configuration} options={{
              title: "Configuración",
              headerStyle: { backgroundColor: "#041D25", marginTop: 20 },
              headerTintColor: "white"
            }} />
            <Stack.Screen name='Shifts' component={Shifts} options={{
              title: 'Turnos',
              headerTintColor:'#fff',
              headerStyle: { backgroundColor: '#041D25' },
            }} />
            <Stack.Screen name='Payments' component={Payments} options={{
              title: 'Pagos',
              headerTintColor:'#fff',
              headerStyle: { backgroundColor: '#041D25' },
            }}/>
          </Stack.Navigator>
          <StatusBar />
        </NavigationContainer>
      </Provider>
    </>
  );
}
