import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, Alert, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Switch } from 'react-native-elements/dist/switch/switch';
import { useSelector } from 'react-redux';
import Styles from './Configuration.styles';
import IP from "../../Ips"
import NotificationsComponent from './Notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/core";
import editInfoButton from "../../../assets/editprofilephoto.png";
import { Input } from 'react-native-elements/dist/input/Input';
import getUser, { PutUser } from '../../../redux/Actions/actions-getUser';
import { useDispatch } from 'react-redux';
import changeUserPassword from "../../../api/put-passreco";
import getUserId from "../../../api/get-user";


const Configuration = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const user = useSelector((state) => state.reducerUser.user);

    //logOut
    const logOut = async () => {
        await AsyncStorage.removeItem("isLogged");
        navigation.navigate('Authentication');
        Alert.alert("", "Sesión cerrada exitosamente");
    }

    //switch newSletter
    const [isEnabled, setIsEnabled] = useState(user.newsletter);
    const toggleSwitch = async () => {
        setIsEnabled(previousState => !previousState);
        isEnabled ? newsletterUnsuscribe() : newsletterSuscribe()
    }

    const [isEditMail, setIsEditMail] = useState(false);
    const [isEditPass, setIsEditPass] = useState(false);
    const [isEditPhoneNumber, setIsEditPhoneNumber] = useState(false);

    const [email, setEmail] = useState({ email: "" });
    const [password, setPassword] = useState({ oldPassword: "", newPassword: "", repeatNewPassword: "" });
    const [phoneNumber, setPhoneNumber] = useState({ phoneNumber: "" });


    const newsletterSuscribe = async () => {
        await axios.put(`https://pocketfithenry.herokuapp.com/api/news/subscribenews`, { id: user.id })
    }

    const newsletterUnsuscribe = async () => {
        await axios.put(`https://pocketfithenry.herokuapp.com/api/news/unsubscribenews`, { id: user.id })
    }

    const validatorEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true
        else return false
    }

    const passwordOnChange = (e, type) => {
        setPassword({
            ...password,
            [type]: e.nativeEvent.text,
        });
    };
    
    const getOldPassword = async () => {
        const oldPassword = await AsyncStorage.getItem("password");
        return oldPassword
    }

    const storeEmail = async (value) => {
        await AsyncStorage.setItem('email', value)
    };
    
    const storePassword = async (value) => {
        await AsyncStorage.setItem('password', value)
    };

    const onSubmit = async (type) => {
        let data;
        switch (type) {
            case "email":
                data = email
                if (email.email.length > 1) {
                    if (!validatorEmail(email.email)) return Alert.alert("Error", "Email inválido");
                } else return Alert.alert("Error", "Por favor completa el campo");
                dispatch(PutUser(user.id, data));
                storeEmail(email.email);
                setIsEditMail(false);
                const resemail = await getUserId(user.id);
                dispatch(getUser(resemail.data));
                Alert.alert("Mail cambiado correctamente");
                break;

            case "password":
                data = password
                if (password.oldPassword.length > 1 && password.newPassword.length > 1 && password.repeatNewPassword.length > 1) {
                    let oldPasswordStoraged = await getOldPassword(); 
                    if (password.oldPassword !== oldPasswordStoraged) return Alert.alert("Error", "Las contraseña anterior no es la correcta")
                    if (password.newPassword !== password.repeatNewPassword) return Alert.alert("Error", "Las nuevas contraseñas no coinciden")
                    await changeUserPassword({
                        id: user.id,
                        newPassword: password.newPassword
                    })
                    await storePassword(password.newPassword);
                    const respass = await getUserId(user.id);
                    dispatch(getUser(respass.data));
                    setIsEditPass(false);
                    Alert.alert("Éxito", "Contraseña cambiada satisfactoriamente")

                } else return Alert.alert("Error", "Por favor completa todos los campos");
                break;

            case "phoneNumber":
                data = phoneNumber
                if (phoneNumber.phoneNumber.length < 1) return Alert.alert("Error", "Por favor completa el campo");
                dispatch(PutUser(user.id, data));
                setIsEditPhoneNumber(false);
                const resnumber = await getUserId(user.id);
                dispatch(getUser(resnumber.data));
                Alert.alert("Numero de celular cambiado correctamente");
                break;

            default:
                break;
        }
    }


    return (
        <Styles.Container>
            <ScrollView>
                <Styles.NewsletterContainer>
                    <Styles.Text>Newsletter</Styles.Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#6AE056" }}
                        thumbColor="white"
                        onValueChange={() => toggleSwitch()}
                        value={isEnabled}
                    />
                </Styles.NewsletterContainer>
                <Styles.NewsletterContainer>
                    <NotificationsComponent />
                </Styles.NewsletterContainer>
                <Styles.GreenButton style={{ margin: 15 }} onPress={() =>
                    Alert.alert('Cerrar Sesión', '¿Esta seguro?',
                        [{ text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'Si', onPress: () => logOut() }], { cancelable: false })}>
                    <Text style={{ alignSelf: 'center', fontFamily: "Poppins_500Medium" }}>Cerrar Sesión</Text>
                </Styles.GreenButton>

                <Styles.EditAccountTitle>Editar cuenta</Styles.EditAccountTitle>
                {
                    isEditMail ?
                        <Styles.InputContainer style={{ marginTop: 10 }}>
                            <Input
                                style={{
                                    width: "90%",
                                    backgroundColor: 'rgba(196, 196, 196, 1)',
                                    borderRadius: 16,
                                    paddingLeft: 8,
                                    marginTop: 5,
                                    fontFamily: "Poppins_500Medium",
                                }}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                placeholder="user@example.com"
                                value={email.email}
                                onChange={(e) => setEmail({ email: e.nativeEvent.text })}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                            />
                            <Styles.ButtonsContainer>
                                <Styles.SendInputButton onPress={() => onSubmit("email")}>
                                    <Text style={{ alignSelf: 'center', fontFamily: "Poppins_500Medium" }}>Aceptar</Text>
                                </Styles.SendInputButton>
                                <Styles.CancelInputButton onPress={() => setIsEditMail(false)}>
                                    <Text style={{ alignSelf: 'center', fontFamily: "Poppins_500Medium", color: "white" }}>Cancelar</Text>
                                </Styles.CancelInputButton>
                            </Styles.ButtonsContainer>
                        </Styles.InputContainer> :

                        <Styles.InfoContainer style={{ marginTop: 10 }}>
                            <Styles.InfoSubContainer style={{ width: "15%" }}>
                                <Styles.InfoKey>Mail:</Styles.InfoKey>
                            </Styles.InfoSubContainer>
                            <Styles.InfoSubContainer style={{ width: "70%" }}>
                                <Styles.InfoValue>{user.email.length > 20 ? user.email.slice(0, 20) + "..." : user.email}</Styles.InfoValue>
                            </Styles.InfoSubContainer>
                            <Styles.EditInfoButtonContainer style={{ width: "14%" }} onPress={() => setIsEditMail(true)}>
                                <Styles.EditInfoButton source={editInfoButton} />
                            </Styles.EditInfoButtonContainer>
                        </Styles.InfoContainer>
                }

                {
                    isEditPass ?
                        <Styles.InputContainer style={{ marginTop: 10 }}>
                            <Input
                                style={{
                                    width: "90%",
                                    backgroundColor: 'rgba(196, 196, 196, 1)',
                                    borderRadius: 16,
                                    paddingLeft: 8,
                                    marginTop: 5,
                                    fontFamily: "Poppins_500Medium",
                                }}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                placeholder="Contraseña anterior"
                                value={password.oldPassword}
                                onChange={(e) => passwordOnChange(e, "oldPassword")}
                                textContentType="password"
                                secureTextEntry={true}
                            />

                            <Input
                                style={{
                                    width: "90%",
                                    backgroundColor: 'rgba(196, 196, 196, 1)',
                                    borderRadius: 16,
                                    paddingLeft: 8,
                                    marginTop: 5,
                                    fontFamily: "Poppins_500Medium",
                                }}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                placeholder="Nueva contraseña"
                                value={password.newPassword}
                                onChange={(e) => passwordOnChange(e, "newPassword")}
                                textContentType="password"
                                secureTextEntry={true}
                            />

                            <Input
                                style={{
                                    width: "90%",
                                    backgroundColor: 'rgba(196, 196, 196, 1)',
                                    borderRadius: 16,
                                    paddingLeft: 8,
                                    marginTop: 5,
                                    fontFamily: "Poppins_500Medium",
                                }}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                placeholder="Repita la nueva contraseña"
                                value={password.repeatNewPassword}
                                onChange={(e) => passwordOnChange(e, "repeatNewPassword")}
                                textContentType="password"
                                secureTextEntry={true}
                            />
                            <Styles.ButtonsContainer>
                                <Styles.SendInputButton onPress={() => onSubmit("password")}>
                                    <Text style={{ alignSelf: 'center', fontFamily: "Poppins_500Medium" }}>Aceptar</Text>
                                </Styles.SendInputButton>
                                <Styles.CancelInputButton onPress={() => setIsEditPass(false)}>
                                    <Text style={{ alignSelf: 'center', fontFamily: "Poppins_500Medium", color: "white" }}>Cancelar</Text>
                                </Styles.CancelInputButton>
                            </Styles.ButtonsContainer>
                        </Styles.InputContainer> :

                        <Styles.InfoContainer style={{ marginTop: 10 }}>
                            <Styles.InfoSubContainer>
                                <Styles.InfoKey>Contraseña:</Styles.InfoKey>
                            </Styles.InfoSubContainer>
                            <Styles.InfoSubContainer>
                                <Styles.InfoValue>*********</Styles.InfoValue>
                            </Styles.InfoSubContainer>
                            <Styles.EditInfoButtonContainer onPress={() => setIsEditPass(true)}>
                                <Styles.EditInfoButton source={editInfoButton} />
                            </Styles.EditInfoButtonContainer>
                        </Styles.InfoContainer>
                }

                {
                    isEditPhoneNumber ?
                        <Styles.InputContainer style={{ marginTop: 10 }}>
                            <Input
                                style={{
                                    width: "90%",
                                    backgroundColor: 'rgba(196, 196, 196, 1)',
                                    borderRadius: 16,
                                    paddingLeft: 8,
                                    marginTop: 5,
                                    fontFamily: "Poppins_500Medium",
                                }}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                placeholder="11-0000-0000"
                                value={phoneNumber.phoneNumber}
                                onChange={(e) => setPhoneNumber({ phoneNumber: e.nativeEvent.text })}
                            />
                            <Styles.ButtonsContainer>
                                <Styles.SendInputButton onPress={() => onSubmit("phoneNumber")}>
                                    <Text style={{ alignSelf: 'center', fontFamily: "Poppins_500Medium" }}>Aceptar</Text>
                                </Styles.SendInputButton>
                                <Styles.CancelInputButton onPress={() => setIsEditPhoneNumber(false)}>
                                    <Text style={{ alignSelf: 'center', fontFamily: "Poppins_500Medium", color: "white" }}>Cancelar</Text>
                                </Styles.CancelInputButton>
                            </Styles.ButtonsContainer>
                        </Styles.InputContainer> :
                        <Styles.InfoContainer style={{ marginTop: 10 }}>
                            <Styles.InfoSubContainer style={{ width: "25%" }}>
                                <Styles.InfoKey>Celular:</Styles.InfoKey>
                            </Styles.InfoSubContainer>
                            <Styles.InfoSubContainer style={{ width: "50%" }}>
                                <Styles.InfoValue>{user.phoneNumber ? `+54 9 ${user.phoneNumber}` : "Desconocido"}</Styles.InfoValue>
                            </Styles.InfoSubContainer>
                            <Styles.EditInfoButtonContainer style={{ width: "24%" }} onPress={() => setIsEditPhoneNumber(true)}>
                                <Styles.EditInfoButton source={editInfoButton} />
                            </Styles.EditInfoButtonContainer>
                        </Styles.InfoContainer>
                }
            </ScrollView>
        </Styles.Container>
    )
}

export default Configuration;