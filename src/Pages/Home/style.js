import styled from "styled-components";

export const CardLeft = styled.div`
  @media (max-width: 900px) {
    width: 100%;
    font-size: 14px;
  }
  font-size: 16px;
  height: 100vh;
  width: 40%;
  background: #cad2c5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: surgir 1.15s backwards;
  @keyframes surgir {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  h2 {
    color: rgb(0, 11, 60);
    font-weight: 600;
    font-size: 2.2em;
    margin-bottom: 0.8em;
    z-index: 1;
    animation: fade 1s ease-in;
  }
  p {
    text-align: center;
    width: 80%;
    color: rgb(0, 11, 60);
    font-weight: 500;
    font-size: 1.5em;
    line-height: 1.3em;
    z-index: 1;
    margin-bottom: 3rem;
    animation: fade 1s ease-in;
  }
  img {
    width: 25%;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 80%;
    animation: fade 2s ease-in;
  }
  @keyframes fade {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 80%;
    }
  }
`;
