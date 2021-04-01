import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 16px;
    font-family: 'Rajdhani', sans-serif;
  }

  .tilt{
    background-color: transparent !important;
    box-shadow: none !important;
  }
  
  body{
    background-color: rgb(0, 11, 60);   
    /* background-image: linear-gradient( rgb(0, 11, 60), rgb(0, 0, 40) , rgb(0, 11, 60) ) ; */
    height: 100vh;
  }

  button{
    font-family: 'Rajdhani', sans-serif;
  }

  .react-ico{
    position: absolute;
    right: 28%;
    top: 40%;
    opacity: 20%;
    width: 100px;
    animation: girar 8s backwards alternate infinite;
  }

  .git-ico{
    position: absolute;
    right: 2%;
    top: 10%;
    opacity: 30%;
    width: 100px;
    animation: git 35s alternate infinite;
  }

  @keyframes git {
  0%{
    
  }
  100% {
    transform: translate(-47vw, 500px) rotate(360deg);
  }
}

  .css-ico{
    position: absolute;
    right: 52vw;
    top: 10%;
    opacity: 30%;
    animation: css 35s alternate infinite;
    width: 70px;
  }

  @keyframes css {
  100% {
    transform: translate(45vw, 65vh) rotate(-360deg);
  }
}

  .html-ico{
    position: absolute;
    right: 2%;
    bottom: 20%;
    opacity: 30%;
    width: 100px;
    animation: html 35s alternate infinite;
    width: 70px;
  }

  @keyframes html {
  to {
    transform: translate(-47vw, -52vh) rotate(360deg);
  }
}

  .js-ico{
    position: absolute;
    right: 50vw;
    bottom: 20%;
    opacity: 30%;
    animation: js 35s alternate infinite;
  }

  @keyframes js {
  100% {
    transform: translate(47vw, -60vh) rotate(-360deg);
  }
}

  @keyframes girar {
    to {
        transform: rotate(-360deg);
    }
  }


`;
export default GlobalStyle;
