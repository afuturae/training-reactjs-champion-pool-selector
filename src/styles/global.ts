import { createGlobalStyle  } from 'styled-components';
import imageBackground from '../assets/bg.png';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }
    body {
        background: url(${imageBackground})  no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
`;

export { GlobalStyle };