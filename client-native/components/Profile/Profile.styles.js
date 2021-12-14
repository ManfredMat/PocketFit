import styled from "styled-components";

const darkGrayBase = "#020E12";
const green = "#6AE056";
const greenMedium = "#588A58";
const yellow = "#CEFA1F";

const Styles = {
    Container: styled.View`
        height: 100%;
        width: 100%;
        background-color: ${darkGrayBase};
        padding: 20px
        padding-bottom: 100px;
    `,

    ProfileImage: styled.Image`
        width: 130px; 
        height: 130px; 
        margin-top: 40px; 
        align-self: center; 
        border-radius: 9999px; 
        background-color: white;
    `,

    UserName: styled.Text`
        align-self: center; 
        margin-top: 10px;
        margin-bottom: 15px;
        font-size: 28px;
        color: white;
        font-family: "Poppins_500Medium";
    `,

    InfoContainer: styled.View`
        background-color: ${greenMedium};
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        margin-bottom: 15px;
    `,

    InfoText: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 16px;
    `,

    ButtonText: styled.Text`
        font-family: "Poppins_500Medium";
        align-self: center;
    `,

    ProfileButtonsContainer: styled.View`
        display: flex; 
        flex-direction: row;
        justify-content: center;
    `,

    GreenButton: styled.TouchableOpacity`
        background-color: ${green};
        border-radius: 10px;
        align-self: center;
        justify-content: center;
        align-items: center;
        height: 30px;
    `,

    YellowButton: styled.TouchableOpacity`
        background-color: ${yellow};
        border-radius: 10px;
        align-self: center;
        justify-content: center;
        align-items: center;
        height: 30px;
    `,

    AccountButtonsContainer: styled.TouchableOpacity`
        background-color: ${greenMedium};
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        margin-top: 15px;
    `,

    AccountButtonsSubContainer: styled.View`
        display: flex;
        flex-direction: row;
        align-items: center;
    `,

    AccountImageButton: styled.Image`
        width: 26px;
        height: 26px;
    `,

    AccountText: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 16px;
        margin-left: 8px
    `,

    Arrow: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        position: absolute; 
        font-size: 50px; 
        bottom: -30px; 
        left: 310px;
    `,
}

export default Styles;