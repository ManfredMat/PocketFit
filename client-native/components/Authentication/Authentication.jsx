import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import tw from 'tailwind-react-native-classnames'
import { SvgXml } from 'react-native-svg'
import headerLogin from '../../assets/headerLogin'
import background from '../../assets/Background.png'
import fitnessGym from '../../assets/fitnessGym'
import userIcon from '../../assets/userIcon'

export default function Authentication() {
    
    const [render, setRender] = useState(false)
    return (
        <ImageBackground 
            source={background} 
            style={{flex: 1, with:'100%', height: '100%'}} 
            imageStyle={{resizeMode: 'stretch'}}>   

            <View style={tw`self-center mt-12`}>
                <SvgXml xml={fitnessGym}/>
            </View>
            <View style={tw`flex self-center mt-12 mb-5`}>
                <SvgXml xml={headerLogin}/>
            </View>

            <View style={tw`bg-gray-300 bg-opacity-40 mt-12 mx-10 rounded-3xl pb-2`}>
                <View style={tw`flex-row self-center mt-10`}>
                    <TouchableOpacity onPress={()=> setRender(false)}>
                        <Text style={tw`ml-0.5 text-xl text-gray-300`}>Registro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setRender(true)}>
                        <Text style={tw`ml-10 text-xl text-gray-300`}>Iniciar Sesion</Text>
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
            <SvgXml style={tw`self-center absolute mt-56`} xml={userIcon}/>
        </ImageBackground>
    )
}
