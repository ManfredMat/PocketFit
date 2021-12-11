import React, { useRef, useState } from 'react'
import { Text } from 'react-native'
import { Switch } from 'react-native-elements'


// import Constants from 'expo-constants';
// import * as Notifications from 'expo-notifications';
// import axios from 'axios'
// import IP from '../../Ips'

// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: false,
//       shouldSetBadge: false,
//     }),
//   });
  
export default function NotificationsComponent() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = async () => {
        setIsEnabled(previousState => !previousState);
    }
    // const submitToken = () => {
    //     if(Constants.isDevice && Platform.OS !== 'web') {
    //         registerForPushNotificationsAsync().then(token => {
    //            axios.post(`http://${IP}:3001/api/notification/token-device`, {registrationToken: token})
    //         });
    //         responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //             console.log(response.notification.request.content.data);
    //         });
    //         return () => { 
    //           Notifications.removeNotificationSubscription(responseListener); 
    //         };
    //       }
    //     }
    return (
        <>
            <Text style={{color: "#fff", fontSize: 17}}>Notificaciones</Text>
            <Switch  style={{marginLeft: "45%"}}
                    trackColor={{ false: "#767577", true: "#6AE056" }}
                    thumbColor="white"
                    onValueChange={() => toggleSwitch()}
                    value={isEnabled}
                />
        </>
    )
}
