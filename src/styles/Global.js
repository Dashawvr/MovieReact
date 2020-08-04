import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    // * {
    //     margin: 0;
    //     padding: 0;
    //     box-sizing: border-box;
    // }
    body {
        background: ${props => props.theme.colors.background};
        font-size: 15px;
        font-family: sans-serif;
        color: ${props => props.theme.colors.text};
    }
`;