import ListOthers from "./components/Lists/ListOthers";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import ListFavorites from "./components/Lists/ListFavorites";

const App = () => {
  return (
    <>
      <Header />
      <CreateNote />
      <ListFavorites />
      <ListOthers />
    </>
  );
};

export default App;
