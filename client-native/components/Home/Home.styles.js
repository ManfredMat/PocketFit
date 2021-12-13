import styled from "styled-components";

const darkGrayBase = '#020E12';

const Styles = {
    
    Container: styled.View`
        height: 100%;
        width: 100%;
        background-color: ${darkGrayBase};
        padding: 10px;
        padding-top: 20px;
        padding-bottom: 103px;
    `,

    ProfileImage: styled.Image`
        width: 80px; 
        height: 80px; 
        margin: 8px; 
        border-radius: 9999px; 
        background-color: white;
    `,

    TextWhite: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
    `,

    TextBlack: styled.Text`
        color: black;
        font-family: "Poppins_500Medium";
    `,

    Card: styled.View`
        border-radius: 20px;
    `,
}

export default Styles;