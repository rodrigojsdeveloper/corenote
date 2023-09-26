import logo from "../../assets/logo.svg";
import { Container } from "./style";

const Logo = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <h1>CoreNotes</h1>
    </Container>
  );
};

export default Logo;
