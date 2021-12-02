import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, ImageBackground, Alert } from 'react-native';
import { Input } from "react-native-elements";
import { ButtonGreen, Label } from "../Authentication.styles";
import { Styles } from "../Authentication.styles";
import { Container } from '../Authentication.styles'
import headerLogin from '../../../assets/Svg/headerLogin';
import fitnessGym from '../../../assets/Svg/fitnessGym';
import userIcon from '../../../assets/Svg/userIcon';
import background from '../../../assets/Background.png';
import { SvgXml } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import changeUserPassword from "../../../api/put-passreco";


const PassReco = () => {
    const navigation = useNavigation();
    const [state, setState] = useState({ newPassword: "", repeatNewPassword: "" });

    const handleOnChange = (e, type) => {
        setState({
            ...state,
            [type]: e.nativeEvent.text,
        });
    };

    const handleOnSubmit = async () => {
        try {

            if (state.newPassword.length > 1 && state.repeatNewPassword.length > 1) {
                if (state.newPassword !== state.repeatNewPassword) return Alert.alert("Error", "Las contraseñas no coinciden")
            } else return Alert.alert("Error", "Por favor completa todos los campos");

            const email = await AsyncStorage.getItem("recoEmail");
            await changeUserPassword({
                email: email,
                newPassword: state.newPassword
            });
            await AsyncStorage.removeItem("recoEmail");

            Alert.alert("Éxito", "Contraseña cambiada satisfactoriamente")
            navigation.navigate('Authentication')

        } catch (e) {
            Alert.alert("Error", "No se pudo cambiar la contraseña");
        }
    };

    return (
        <ImageBackground
            source={background}
            style={{ flex: 1, width: '100%', height: '100%' }}
            imageStyle={{ resizeMode: 'stretch' }}>

            <View>
                <SvgXml xml={fitnessGym} style={{ flex: 1, alignSelf: "center", marginTop: 25 }} />
            </View>
            <View>
                <SvgXml xml={headerLogin} style={{ alignSelf: "center", top: 50 }} />
            </View>

            <Container>
                <SvgXml style={{ position: 'relative', marginTop: -50 }} xml={userIcon} />
                <View style={{ width: 300 }}>
                    <Label>Nueva Contraseña</Label>
                    <Input
                        style={Styles.Input}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        name="newPassword"
                        secureTextEntry={true}
                        placeholder="********"
                        value={state.newPassword}
                        onChange={(e) => handleOnChange(e, "newPassword")}
                        textContentType="password"
                    />
                    <Label>Repetir Nueva Contraseña</Label>
                    <Input
                        style={Styles.Input}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        name="repeatNewPassword"
                        secureTextEntry={true}
                        placeholder="********"
                        value={state.repeatNewPassword}
                        onChange={(e) => handleOnChange(e, "repeatNewPassword")}
                        textContentType="password"
                    />
                </View>
                <View>
                    <ButtonGreen
                        onPress={() => handleOnSubmit()}
                    >
                        <Text style={{ alignSelf: "center", fontFamily: "Poppins_500Medium" }}>Cambiar contraseña</Text>
                    </ButtonGreen>
                </View>
            </Container>
        </ImageBackground>
    );

}

export default PassReco
