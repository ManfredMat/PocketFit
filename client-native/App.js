import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./App-Style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUp from "./components/SignUp";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  const Stack1 = createNativeStackNavigator();
  const Stack = createBottomTabNavigator();


  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="nav">

          <Stack.Screen
            name="Landing"
            component={() => <Text>Inicio</Text>}
            options={{ title: "Pagina de inicio" }}
          />
          <Stack.Screen
            name="SingUp"
            component={() => <Text>Registrarse</Text>}
            options={{ title: "Registrarse" }}
          />
          <Stack.Screen
            name="Login"
            component={() => <Text>Iniciar Sesión</Text>}
            options={{ title: "Iniciar Sesion" }}
          />
          <Stack.Screen
            name="Home"
            component={() => <Text>Home</Text>}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Profile"
            component={() => <Text>Perfil</Text>}
            options={{ title: "Perfil" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}
