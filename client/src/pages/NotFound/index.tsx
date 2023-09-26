import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../../components/Logo";
import { Container } from "./style";
import React from "react";

const NotFound = () => {
  const currentUrl = window.location.href.split("/")[3];

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Not Found | CoreNote" />
      </HelmetProvider>
      <Container>
        <div className="not-found-container">
          <div className="not-found-content">
            <Logo />

            <p className="not-found-title">
              <b>404.</b> Isso é um erro.
            </p>

            <p className="not-found-description">
              A URL solicitada /{currentUrl} não foi encontrada neste servidor.
            </p>
            <p className="not-found-info">Isso é tudo que sabemos.</p>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;
