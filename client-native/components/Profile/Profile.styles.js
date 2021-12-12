import styled from "styled-components";

const darkGrayBase = '#020E12';
const green = '#6AE056';

const Styles = {
    Container: styled.View`
        margin-top: 25px;
        height: 100%;
        width: 100%;
        background-color: ${darkGrayBase};
        padding-bottom: 100px;
    `,

    Text: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
    `,

    CardGreen: styled.View`
        border-radius: 20px;
        background-color: ${green};
    `,

    GreenButton: styled.TouchableOpacity`
        background-color: ${green};
        border-radius: 18px;
        align-self: center;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 120px;
        margin-top: 10px;
        margin-bottom: 20px;
    `,
}

export default Styles;