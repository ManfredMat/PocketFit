import styled from "styled-components";

const darkGrayBase = "#020E12";
const green = "#6AE056";

const Styles = {
    Container: styled.View`
        height: 100%;
        width: 100%;
        background-color: ${darkGrayBase};
    `,

    NewsletterContainer: styled.View`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    `,

    Text: styled.Text`
        color: white;
        font-family: "Poppins_500Medium";
        font-size: 17px;
    `,
}

export default Styles;