import ButtonAnimated from "./style";

const Button = (props) => {
  return (
    <ButtonAnimated className="button-animated">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.children}
    </ButtonAnimated>
  );
};

export default Button;
