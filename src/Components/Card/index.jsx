import { Container, Cards, Content } from "./style.js";
import Tilt from "react-vanilla-tilt";

const Card = () => {
  return (
    <>
      <Container>
        <Tilt className="tilt" options={{ scale: 0.5, max: 210 }}>
          <Cards className="card">
            <Content>
              <h3>Virtuose</h3>
              <p>
                Um gestor de hábitos feito em equipe simulando um ambiente
                empresarial, onde cada membro tinha sua função no projeto, tive
                o prazer de ser tech leader, foi uma experiência intensa e
                gratificante!
              </p>
              <a
                href="https://virtuose-virid.vercel.app/home"
                alt="virtuose"
                target="#"
              >
                Visitar
              </a>
            </Content>
          </Cards>
        </Tilt>
      </Container>
    </>
  );
};

export default Card;
