import ListFavorites from "./components/Lists/ListFavorites";
import ListOthers from "./components/Lists/ListOthers";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <CreateNote />
        <ListFavorites />
        <ListOthers />
      </main>
    </>
  );
};

export default App;
