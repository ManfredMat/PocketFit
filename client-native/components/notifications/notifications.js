import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import axios from 'axios'
import IP from '../Ips'
import { useDispatch } from 'react-redux';




Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Notify() {
  const dispatch = useDispatch()
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    if(Constants.isDevice && Platform.OS !== 'web') {
      registerForPushNotificationsAsync().then(token => {
         axios.post(`https://nativenotify.com/api/expo/key`, { 
           appId: 667, appToken: 'IONltqu86xwT3H5l2OSLtu', expoToken: token })
      });
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response.notification.request.content.data);
      });
      return () => { 
        Notifications.removeNotificationSubscription(responseListener); 
      };
    }
  }, []);

  return (
    <View style={{backgroundColor:'#020E12', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:'#fff'}}>Notificaciones</Text>
    </View>
  );
}

async function registerForPushNotificationsAsync() {
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

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}