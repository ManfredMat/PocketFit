import React from "react";
import { Text } from "react-native-elements";
import { Image } from "react-native-elements/dist/image/Image";

const TestComponent = () => {
    return (
        <>
        <Text>Se ha renderizado correctamente el componente de prueba!!</Text>
        <Image style={{width: 300, height: 300}} source={require("../assets/icon1.png")}/>
        </>
    )
}

export default TestComponent;