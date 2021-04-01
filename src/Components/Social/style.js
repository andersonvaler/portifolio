import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 900px) {
    width: 80%;
  }
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: surgir2 1s backwards;
  @keyframes surgir2 {
    0% {
      opacity: 0%;
      transform: translateX(-100%);
    }
    100% {
      opacity: 100%;
      transform: translateX(0);
    }
  }
`;

export const Instagram = styled.a`
  padding: 0 5px;
  min-width: 110px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  outline: none;
  background: none;
  border-radius: 4px;
  color: #252422;
  width: 100px;
  height: 2.5rem;
  font-size: 1.3em;
  font-weight: 600;
  transition: ease-out 0.3s;
  box-shadow: 0 2.5px 3px 1px rgba(5, 4, 4, 0.6);
  &:hover {
    color: red;
  }
`;

export const Gitlab = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  outline: none;
  background: none;
  border-radius: 4px;
  color: #e07800;
  min-width: 110px;
  width: 7.8rem;
  height: 2.5rem;
  font-size: 1.3em;
  font-weight: 600;
  box-shadow: 0 2.5px 3px 1px rgba(5, 4, 4, 0.6);
  margin: 0 6px;
  transition: ease-out 0.3s;
  &:hover {
    color: red;
  }
`;

export const Linkedin = styled.a`
  min-width: 110px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  outline: none;
  background: none;
  border-radius: 4px;
  color: #0466c8;
  width: 7.8rem;
  height: 2.5rem;
  font-size: 1.3em;
  font-weight: 600;
  box-shadow: 0 2.5px 3px 1px rgba(5, 4, 4, 0.6);
  transition: ease-out 0.2s;
  &:hover {
    color: red;
  }
`;
