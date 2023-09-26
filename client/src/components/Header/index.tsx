import { Container } from "./style";
import x from "../../assets/x.svg";
import Input from "../Input";
import Logo from "../Logo";

const DesktopHeader = () => {
  return (
    <div className="container desktop">
      <div className="content">
        <Logo />
        <Input />
      </div>
      <img src={x} alt="Fechar" />
    </div>
  );
};

const MobileHeader = () => {
  return (
    <div className="container mobile">
      <div className="content">
        <Logo />
        <img src={x} alt="Fechar" />
      </div>
      <Input />
    </div>
  );
};

const Header = () => {
  return (
    <Container>
      <DesktopHeader />
      <MobileHeader />
    </Container>
  );
};

export default Header;
