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

    HeaderContainer: styled.View`
        display: flex; 
        flex-direction: row; 
        align-items: center;
    `,

    ProfileImage: styled.Image`
        width: 95px; 
        height: 95px; 
        margin: 8px; 
        border-radius: 9999px; 
        background-color: white;
    `,

    NameLogoContainer: styled.View`
        display: flex;
        flex-direction: column;
    `,

    GymLogo: styled.Image`
        width: 130px;
        height: 18px;
    `,

    HeaderText: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 25px;
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