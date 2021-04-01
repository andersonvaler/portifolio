import styled from "styled-components";
import virtuose from "../../Img/virtuose.png";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
`;

export const Cards = styled.div`
  position: relative;
  width: 215px;
  height: 400px;
  margin: 30px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  background-image: url(${virtuose});
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;
export const Content = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  &:hover {
    transform: translateX(00);
    opacity: 1;
  }

  h3 {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 1.5em;
    z-index: 1;
    color: #000000cd;
  }

  p {
    font-weight: 600;
    font-size: 1em;
    z-index: 1;
    color: #000000bb;
  }

  a {
    position: absolute;
    bottom: 1%;
    left: -20px;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    outline: none;
    background: #f94144aa;
    border-radius: 4px;
    color: #fff;
    width: 100%;
    height: 2.5rem;
    font-size: 1.3em;
    font-weight: 600;
    box-shadow: 0 2.5px 3px 1px rgba(5, 4, 4, 0.6);
    margin: 0 20px;
    transition: ease-out 1s;
    &:hover {
      background-color: #f94144cc;
    }
  }
`;
