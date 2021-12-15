import styled, { createGlobalStyle } from "styled-components";


const Styles = {
  GlobalStyle: createGlobalStyle`
  * {
      margin:0;
      color: #ffffff;
  }`,
  StyledBody: styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    width:100vw;
    height: 100vh;
  `,
  StyledFirstRow: styled.div`
    display: flex;
    flex-direction: row;
  `,
  StyledCalendarContainer: styled.div`
  padding-right:2rem;
  display:flex;
  flex-direction: column;
`,
  StyledTodayRows: styled.div`
    display: flex;
    flex-direction: row;
  `,
  StyledLeftColumn: styled.div`
    display: flex;
    flex-direction: column;
  `,
  StyledLeftColumnHead: styled.div`
  display: flex;
  flex-direction: row;
`,
};

export default Styles;
