import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import { SvgXml } from 'react-native-svg'
import headerLogin from '../../assets/Svg/headerLogin'
import background from '../../assets/Background.png'
import fitnessGym from '../../assets/Svg/fitnessGym'
import userIcon from '../../assets/Svg/userIcon'



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

            <View>
                <View>
                    <TouchableOpacity onPress={()=> setRender(false)}>
                        <Text>Registro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setRender(true)}>
                        <Text>Iniciar Sesion</Text>
                    </TouchableOpacity>
                </View>
                   
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
            </View>
            <SvgXml xml={userIcon}/>
        </ImageBackground>
    )
}
