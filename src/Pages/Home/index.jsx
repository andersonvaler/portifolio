import Menu from "../../Components/Menu";
import { CardLeft } from "./style";
import imagem from "../../Img/programacao.svg";
import Social from "../../Components/Social";
import reactIco from "../../Img/react.png";
import gitIco from "../../Img/git.png";
import htmlIco from "../../Img/html.png";
import cssIco from "../../Img/css.png";
import { SiJavascript } from "react-icons/si";
import Stack from "../Stack";
const Home = () => {
  return (
    <div>
      <CardLeft>
        <h2>Olá seja bem vindo!</h2>
        <p>
          Meu nome é Anderson Valério, sou desenvolvedor Web em uma jornada
          infinita no mundo da programação, me mantendo sempre atualizado e
          aprofundando cada dia mais meu conhecimento!
        </p>
        <img src={imagem} alt="Programming" />
        <Social />
      </CardLeft>
      <Menu />
      <img src={reactIco} alt="react" className="react-ico" />
      <img src={gitIco} alt="react" className="git-ico" />
      <img src={htmlIco} alt="react" className="html-ico" />
      <img src={cssIco} alt="react" className="css-ico" />
      {/* <img src={jsIco} alt="react" className="js-ico" /> */}
      <SiJavascript
        className="js-ico"
        style={{ color: "yellow", fontSize: "70px" }}
      />
      {/* <img
        src="https://www.codewars.com/users/andersonvaler/badges/large"
        alt="codewars"
      /> */}
      <Stack />
    </div>
  );
};

export default Home;
