import Home from "./components/Home";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <h1 className="text-4xl text-center">Buscador de Películas</h1>
      <main className="m-3 w-4/5 mx-auto">
        <SearchBar />
        <Home />
      </main>
    </>
  );
}

export default App;
