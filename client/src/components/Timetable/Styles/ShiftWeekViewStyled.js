import styled, { createGlobalStyle } from "styled-components";

const Styles = {
  GlobalStyle: createGlobalStyle`
      * {
          margin:0;
          color: #ffffff;
      }`,
  BodyStyled: styled.div`
    width: -webkit-fill-available;
    z-index: 0;
  `,
  semanaContainer: styled.div`
    padding-top: 1em;
    margin-left: 3.6em;
  `,
  semanaText: styled.h2`
    color: var(--green);
    font-size: 1.5em;
    background-color: var(--darkGray-medium);
    border-radius: 0.6em;
    padding: 0.4em 0em 0.4em;
    text-align: center;
  `,
  ContainerStyled: styled.div`
    margin-left: -3.6em;
    width: 106%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  `,
  SubContainerStyled: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ColumnsStyle: styled.div`
    width: 16.4%;
  `,
  CardShiftContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.flag ? "3.4em" : "auto")};
  `,
  CardShift: styled.div`
    background-color: var(--yellow);
    padding: 1em 2em;
    margin: 0.4em 0.3em;
    border-radius: 0.6em;
    height: 6em;
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
  `,
  CardNums: styled.div`
    height: ${(props) => (props.flag ? "2.3em" : "6em")};
    padding: ${(props) => (props.flag ? "0.5em 0.5em" : "1em 0.5em")};
    margin: 0.4em 0.3em;
    display: flex;
    font-size: ${(props) => (props.flag ? "1.3em" : "auto")};
    width: 1.55em;
  `,
  Nums: styled.p`
    text-align: center;
    font-size: ${(props) => (props.flag ? "1.3em" : "0.8em")};
    color: var(--green);
    background-color: ${(props) => (props.flag ? "transparent" : "var(--darkBlue);")};
    border-radius: 50%;
    font-weight: 600;
    padding: 0.3em;
    width: 1.3em;
    height: 1.3em;
    align-self: center;
  `,
  head: styled.div`
    height: 2.3em;
    display: flex;
    background-color: var(--green);
    padding: 0.5em 2em;
    border-radius: 0.6em;
    margin: 0.4em 0.23em;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3em;
  `,
  headText: styled.p`
    color: var(--darkGray-base);
    font-weight: 600;
  `,
  capacityTag: styled.p`
    background-color: var(--darkGray-base);
    padding: 0.5em;
    text-align: center;
    border-radius: 0.6em;
    width: 80%;
    font-size: 1.4em;
    margin-bottom: 0.8em;
  `,
  timeTag: styled.p`
    text-align: center;
    color: var(--darkGray-base);
    font-size: 1.1em;
  `,
};

export default Styles;
