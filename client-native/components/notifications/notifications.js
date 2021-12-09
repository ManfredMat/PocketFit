import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Button } from 'react-native'
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import axios from 'axios';
import IP from '../Ips'
Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

export default function notifications() {

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token))
      async (token = expoPushToken) => await axios.post(`http://${IP}:3001/api/notification/token`, token);

      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    }, [])

    return (
        <View style={{ backgroundColor: '#020E12', width: '100%', height: '100%', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', alignSelf: "center" }}>{notification}</Text>
            <Button title='press me' onPress={()=> console.log('nada')}/>
            
        </View>
    )
}
const registerForPushNotificationsAsync = async () => {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }
  console.log(token)
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  console.log(token)
  return token;
}