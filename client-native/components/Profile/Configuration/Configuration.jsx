import axios from 'axios';
import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Switch } from 'react-native-elements/dist/switch/switch';
import { useSelector } from 'react-redux';
import Styles from './Configuration.styles';
import IP from "../../Ips"

const Configuration = () => {
    const user = useSelector(state => state.reducerUser.user)
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
            <StatusBar barStyle="dark-content" backgroundColor="#fafafa" />
            <Styles.NewsletterContainer>
                <Styles.Text>Newsletter</Styles.Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#6AE056" }}
                    thumbColor="white"
                    onValueChange={() => toggleSwitch()}
                    value={isEnabled}
                />
            </Styles.NewsletterContainer>
        </Styles.Container>
    )
}

export default Configuration;
