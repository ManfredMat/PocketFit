import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import { SvgXml } from 'react-native-svg'
import headerLogin from '../../assets/Svg/headerLogin'
import background from '../../assets/Background.png'
import fitnessGym from '../../assets/Svg/fitnessGym'
import userIcon from '../../assets/Svg/userIcon'
import { Container, ContainerBar } from './AuthenticatioStyled'


export default function Authentication() {
    
    const [render, setRender] = useState(false)
    return (
        <ImageBackground 
            source={background} 
            style={{flex: 1, with:'100%', height: '100%'}} 
            imageStyle={{resizeMode: 'stretch'}}>   
            <View>
                <SvgXml xml={fitnessGym}/>
            </View>
            <View>
                <SvgXml xml={headerLogin}/>
            </View>

            <Container>
                <SvgXml style={{position: 'relative', marginTop: -50}} xml={userIcon}/>
                <ContainerBar>
                    <TouchableOpacity onPress={()=> setRender(false)}>
                        <Text style={{marginRight: 40, fontSize: 15, color:'#C0C6CC'}}>Registro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setRender(true)}>
                        <Text style={{marginLeft: 40, fontSize: 15, color:'#C0C6CC'}}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                </ContainerBar>
                   
                <View>
                    {render ? 
                    (
                        <SignIn/>
                    )
                    :
                    (
                        <SignUp/>
                    )
                    }
                </View>
            </Container>
        </ImageBackground>
    )
}
