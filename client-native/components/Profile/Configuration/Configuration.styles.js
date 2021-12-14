import styled from "styled-components";

const darkGrayBase = "#020E12";
const green = "#6AE056";

const Styles = {
    Container: styled.View`
        height: 100%;
        width: 100%;
        background-color: ${darkGrayBase};
        align-items: center;
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

}

export default Styles;