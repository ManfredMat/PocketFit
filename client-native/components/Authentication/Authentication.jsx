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
    
    const [render, setRender] = useState(false)
    return (
        <ImageBackground 
            source={background} 
            style={{flex: 1, width:'100%', height: '100%'}} 
            imageStyle={{resizeMode: 'stretch'}}>   
            <View>
                <SvgXml xml={fitnessGym} style={{flex: 1, alignSelf: "center", marginTop: 25}}/>
            </View>
            <View>
                <SvgXml xml={headerLogin} style={{alignSelf: "center", top: 50}}/>
            </View>

            <Container>
                <SvgXml style={{position: 'relative', marginTop: -50}} xml={userIcon}/>
                <ContainerBar>
                    <TouchableOpacity onPress={()=> setRender(false)}>
                        <Text style={{marginRight: 40, fontSize: 15, color: render ? "#C0C6CC" : "#6AE056"}}>Registro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setRender(true)}>
                        <Text style={{marginLeft: 40, fontSize: 15, color: render ? "#6AE056" : "#C0C6CC"}}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </ContainerBar>
                   
                <ScrollView>
                    {render ? 
                    (
                        <SignIn/>
                    )
                    :
                    (
                        <SignUp/>
                    )
                    }
                </ScrollView>
            </Container>
        </ImageBackground>
    )
}
