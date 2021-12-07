import styled from "styled-components";

const darkGrayBase = '#020E12';

const Styles = {
    TextWhite: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
    `,

    TextBlack: styled.Text`
        color: black;
        font-family: "Poppins_500Medium";
    `,

    Container: styled.View`
        height: 100%;
        width: 100%;
        background-color: ${darkGrayBase};
        margin-top: 25px;
        padding-bottom: 103px;
    `,

    Card: styled.View`
        border-radius: 20px;
    `,
}

export default Styles;