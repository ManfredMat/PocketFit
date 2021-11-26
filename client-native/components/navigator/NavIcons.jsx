import React from "react";
import { Image } from "react-native-elements/dist/image/Image";

// Este componente puede recibir el parametro "size" el cual definira el valor del tamaño de ese icono en especifico
// Si modificas el valor de sz modificas el tamaño por defecto de los iconos de la barra de navegación

const NavIcon = ({imgSrc,size}) => { 

    let sz = 25;

    if(size) sz = size;


    return(
        <>
             {imgSrc === 1 ? <Image style={{width: sz, height: sz}} source={require("../../assets/navIcons/home.png")}/> : null}
             {imgSrc === 2 ? <Image style={{width: sz, height: sz}} source={require("../../assets/navIcons/analysis.png")}/> : null}
             {imgSrc === 3 ? <Image style={{width: sz, height: sz}} source={require("../../assets/navIcons/user.png")}/> : null}
             {imgSrc === 4 ? <Image style={{width: sz, height: sz}} source={require("../../assets/navIcons/weight.png")}/> : null}
             {imgSrc === 5 ? <Image style={{width: sz, height: sz}} source={require("../../assets/navIcons/notification.png")}/> : null}
        </>
    )

} 

export default NavIcon;