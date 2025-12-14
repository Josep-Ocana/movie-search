import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <main className="m-3 w-4/5 mx-auto">
        <SearchBar />
        <Home />
      </main>
    </>
  );
}

export default App;
