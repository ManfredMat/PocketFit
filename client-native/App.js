import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./App-Style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./components/navigator/RootStack";
import InicioStack from "./components/navigator/InicioStack";



export default function App() {
  const Stack = createNativeStackNavigator();
  const [log, setLog] = useState(true)


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= 'Authentication ' component={RootStack} options = {{headerShown: false}}/> 
            <Stack.Screen name= 'Inicio' component={InicioStack} options={{title:'PocketFit'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
