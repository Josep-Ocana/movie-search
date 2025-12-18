import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow m-3 w-4/5 mx-auto">
          <SearchBar />
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
