import { Instagram, Container, Gitlab, Linkedin } from "./style";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { SiGitlab } from "react-icons/si";

const Social = () => {
  return (
    <Container>
      <Instagram href="https://www.instagram.com/andersonvaler/" target="#">
        <InstagramIcon />
        Instagram
      </Instagram>
      <Gitlab href="https://gitlab.com/andersonvaler" target="#">
        <SiGitlab />
        Gitlab
      </Gitlab>
      <Linkedin
        href="https://www.linkedin.com/in/anderson-dos-santos-val%C3%A9rio-50b2b96b/"
        target="#"
      >
        <LinkedInIcon />
        Linkedin
      </Linkedin>
    </Container>
  );
};

export default Social;
