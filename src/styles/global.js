import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFF;
        --whitesmoke: whitesmoke; 
        
        --black: #000000;

        --red: #b91c1c;

        --purple-800: #6b21a8;
        --purple-900: #581c87;

        --orange-500: #f97316;
        --orange-600: #ea580c;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: rgb(90,25,143);
        background: linear-gradient(90deg, rgba(90,25,143,1) 5%, rgba(143,62,205,1) 98%);
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`