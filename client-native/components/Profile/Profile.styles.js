import styled from "styled-components";

const darkGrayBase = '#020E12';
const green = '#6AE056';

const Styles = {
    Container: styled.View`
        margin-top: 25px;
        height: 100%;
        width: 100%;
        background-color: ${darkGrayBase};
    `,

    Text: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
    `,

    CardGreen: styled.View`
        border-radius: 20px;
        background-color: ${green};
    `,
}

export default Styles;