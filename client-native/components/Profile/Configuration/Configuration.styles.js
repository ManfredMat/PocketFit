import styled from "styled-components";

const darkGrayBase = "#020E12";
const green = "#6AE056";
const greenMedium = "#588A58";
const darkBlue = "#083645";

const Styles = {
    Container: styled.View`
        height: 100%;
        width: 100%;
        background-color: ${darkGrayBase};
        align-items: center;
        padding: 15px;
    `,

    NewsletterContainer: styled.View`
        display: flex;
        height: 60px;
        width: 350px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    `,

    Text: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 17px;
    `,

    GreenButton: styled.TouchableOpacity`
        background-color: ${green};
        border-radius: 10px;
        align-self: center;
        padding: 4px;
        height: 30px;
        width: 130px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-family: "Poppins_500Medium";
    `,

    EditAccountTitle: styled.Text`
        color: ${green};
        font-family: "Poppins_500Medium";
        font-size: 18px;
        margin-top: 20px;
        align-self: flex-start;
    `,

    InfoContainer: styled.View`
        background-color: ${greenMedium};
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
        margin-bottom: 15px;
        width: 100%;
    `,

    InputContainer: styled.View`
        background-color: ${greenMedium};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 8px;
        margin-bottom: 15px;
        width: 100%;
    `,

    ButtonsContainer: styled.View`
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 85%;
    `,

    SendInputButton: styled.TouchableOpacity`
        background-color: ${green};
        border-radius: 10px;
        align-self: center;
        padding: 4px;
        height: 30px;
        width: 100px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-family: "Poppins_500Medium";
    `,

    CancelInputButton: styled.TouchableOpacity`
        background-color: ${darkBlue};
        border-radius: 10px;
        align-self: center;
        padding: 4px;
        height: 30px;
        width: 110px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-family: "Poppins_500Medium";
    `,

    InfoSubContainer: styled.View`
        width: 33%;
    `,

    InfoKey: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 16px;
        align-self: flex-start;
    `,

    InfoValue: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 16px;
        align-self: center;
    `,

    EditInfoButtonContainer: styled.TouchableOpacity`
        width: 33%;
    `,

    EditInfoButton: styled.Image`
        height: 30px; 
        width: 30px;
        align-self: flex-end;
    `,
}

export default Styles;