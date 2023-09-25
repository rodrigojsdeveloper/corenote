import logo from "../../../public/favicon.svg";
import { Container } from "./style";
import x from "../../assets/x.svg";
import Input from "../Input";

const DesktopHeader = () => {
  return (
    <div className="container desktop">
      <div className="content">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>CoreNotes</h1>
        </div>
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
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>CoreNotes</h1>
        </div>
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
