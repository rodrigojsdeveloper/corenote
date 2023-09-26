import home from "../../assets/home.svg";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <div className="home-header">
        <div className="home-container">
          <Logo />

          <div className="home-content">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                viewBox="0 0 256 256"
              >
                <g fill="#ffa000">
                  <path d="m200 88l-72 72H96v-32l72-72Z" opacity=".2" />
                  <path d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32ZM124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 120v88a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h88a8 8 0 0 1 0 16H48v160h160v-88a8 8 0 0 1 16 0Z" />
                </g>
              </svg>
            </figure>

            <p className="home-text">
              CoreNote é um aplicativo web para criar e gerenciar listas de
              tarefas, com uma página responsiva e API poderosa para
              armazenamento e gerenciamento.
            </p>
          </div>

          <Link to="/dashboard" className="home-button">
            Entrar
          </Link>
        </div>

        <img src={home} alt="SVG" />
      </div>
    </Container>
  );
};

export default Home;
