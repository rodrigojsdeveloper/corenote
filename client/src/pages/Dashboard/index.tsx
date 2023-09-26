import ListFavorites from "../../components/Lists/ListFavorites";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ListOthers from "../../components/Lists/ListOthers";
import CreateNote from "../../components/CreateNote";
import Header from "../../components/Header";
import { Container } from "./style";
import React from "react";

const Dashboard = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Dashboard | CoreNote" />
      </HelmetProvider>
      <Header />
      <Container>
        <CreateNote />
        <ListFavorites />
        <ListOthers />
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
