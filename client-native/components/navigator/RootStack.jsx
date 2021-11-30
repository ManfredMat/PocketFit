import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authentication from '../Authentication/Authentication';
import Loading from '../Authentication/Loading';

const Stack = createNativeStackNavigator();

export default function RootStack() {
    
    return (
        <>
                <Stack.Navigator>
                    <Stack.Screen 
                       name="Authentication"
                       component={Authentication}
                       options={{ headerShown: false}}
                    />
                    <Stack.Screen 
                        name= 'loading' 
                        component={Loading} 
                        options = {{headerShown: false}}/>
                </Stack.Navigator>
        </>
    )
}
