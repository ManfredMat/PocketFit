import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";

// Este componente puede recibir el parametro "size" el cual definira el valor del tamaño de ese icono en especifico
// Si modificas el valor de sz modificas el tamaño por defecto de los iconos de la barra de navegación

const NavIcon = ({imgSrc, focused}) => { 

    let sz = 20;

    return(
        <>
             {imgSrc === 1 
                ? <View style={{
                            borderTopWidth: focused ? 2 : 0, 
                            borderColor:'#6AE056', 
                            padding:7}}>
                    <Image 
                        source={require("../../assets/navIcons/home.png")}
                        style={{
                            width: 21, 
                            height: sz, 
                            tintColor: focused ? '#6AE056' : '#fff'}} 
                    />
                </View> 
                : 
             imgSrc === 2 
                ? <View style={{
                            borderTopWidth: focused ? 2 : 0, 
                            borderColor:'#6AE056', 
                            padding:7}}>
                    <Image 
                        source={require("../../assets/navIcons/analysis.png")}
                        style={{
                            width: sz, 
                            height: sz, 
                            tintColor: focused ? '#6AE056' : '#fff'}} 
                        /> 
                 </View>
                : 
             imgSrc === 3 
                ? <View style={{
                            borderTopWidth: focused ? 2 : 0, 
                            borderColor:'#6AE056', 
                            padding:7}}>
                    <Image 
                        source={require("../../assets/navIcons/user.png")}
                        style={{
                            width: 12.86, 
                            height: sz, 
                            tintColor: focused ? '#6AE056' : '#fff'}} 
                        /> 
                 </View>
                : 
             imgSrc === 4 
                ? <View style={{
                            borderTopWidth: focused ? 2 : 0, 
                            borderColor:'#6AE056', 
                            padding:7}}>
                    <Image 
                        source={require("../../assets/navIcons/weight.png")}
                        style={{
                            width: sz, 
                            height: sz, 
                            tintColor: focused ? '#6AE056' : '#fff'}} 
                        />
                 </View>
                :
             imgSrc === 5 
                ? <View style={{
                            borderTopWidth: focused ? 2 : 0, 
                            borderColor:'#6AE056', 
                            padding:7}}>
                    <Image 
                        source={require("../../assets/navIcons/notification.png")}
                        style={{
                            width: 17.5, 
                            height: sz, 
                            tintColor: focused ? '#6AE056' : '#fff'}} 
                    /> 
                 </View> : null}
        </>
    )

} 

export default NavIcon;