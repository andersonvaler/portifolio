import { Avatar, Container, Itens, MenuItem, Name } from "./style";

const Menu = () => {
  return (
    <Container>
      <Avatar>
        <Name />
      </Avatar>
      <Itens>
        <MenuItem>
          Home
          <span />
          <span />
          <span />
          <span />
        </MenuItem>
        <MenuItem>
          Stack
          <span />
          <span />
          <span />
          <span />
        </MenuItem>
        <MenuItem>
          Projetos
          <span />
          <span />
          <span />
          <span />
        </MenuItem>
        <MenuItem>
          Contato
          <span />
          <span />
          <span />
          <span />
        </MenuItem>
      </Itens>
    </Container>
  );
};

export default Menu;
