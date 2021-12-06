import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import { SvgXml } from 'react-native-svg'
import headerLogin from '../../assets/Svg/headerLogin'
import background from '../../assets/Background.png'
import fitnessGym from '../../assets/Svg/fitnessGym'
import userIcon from '../../assets/Svg/userIcon'
import { Container, ContainerBar } from './Authentication.styles'


export default function Authentication() {

    const [render, setRender] = useState(true)
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
                <ContainerBar>
                    <TouchableOpacity onPress={() => setRender(true)} style={{ borderBottomWidth: render ? 4 : 2, borderStyle: "solid", borderColor: render ? "#6AE056" : "#C0C6CC", paddingLeft: 15 }}>
                        <Text style={{ marginRight: 40, fontSize: 15, color: render ? "#6AE056" : "#C0C6CC", right: -8, fontFamily: "Poppins_500Medium" }}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRender(false)} style={{ borderBottomWidth: render ? 2 : 4, borderStyle: "solid", borderColor: render ? "#C0C6CC" : "#6AE056", paddingRight: 30 }}>
                        <Text style={{ marginLeft: 40, fontSize: 15, color: render ? "#C0C6CC" : "#6AE056", left: -10, fontFamily: "Poppins_500Medium" }}>Registrarse</Text>
                    </TouchableOpacity>
                </ContainerBar>
                <ScrollView>
                    {render ? <SignIn /> : <SignUp />}
                </ScrollView>
            </Container>
        </ImageBackground>
    )
}
