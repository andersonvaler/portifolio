import styled from "styled-components";

const ButtonAnimated = styled.button`
  position: relative;
  color: ${(props) => props.primary};
  padding: 5px 20px;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  overflow: hidden;
  border-radius: 8px;
  background: none;
  transition: ease-in 0.2s;
  cursor: pointer;
  border: none;

  &:hover {
    color: #fff;
    transform: scale(1.03);
  }

  &:hover span:nth-child(1) {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #99999957, #fff);
    animation: animateTop 3s backwards infinite;
    border-radius: 10px;
  }

  @keyframes animateTop {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  &:hover span:nth-child(2) {
    position: absolute;
    top: 0px;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, #99999957, #fff);
    animation: animateLeft 3s backwards infinite;
    border-radius: 10px;
  }

  @keyframes animateLeft {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  &:hover span:nth-child(3) {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, #99999957, #fff);
    animation: animateBottom 3s backwards infinite;
    border-radius: 10px;
  }

  @keyframes animateBottom {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  &:hover span:nth-child(4) {
    position: absolute;
    top: 0px;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #99999957, #fff);
    animation: animateRight 3s backwards infinite;
    border-radius: 10px;
  }

  @keyframes animateRigth {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

export default ButtonAnimated;
