import { createGlobalStyle } from "styled-components";

//: 전역적 스타일 적용 파일
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
    background-color: lightgray;
  }

  h1 {
    color: black;
  }

  .globalbox {
    background-color: lightblue;
    padding: 20px;
    border-radius: 5px;
  }


`;

export default GlobalStyles;