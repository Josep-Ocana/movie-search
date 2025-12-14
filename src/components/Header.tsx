import film from "../icons/film.svg";

const Header = () => {
  return (
    <header className="bg-cyan-300 p-5 flex justify-center  items-center mb-10">
      <div className="flex flex-col items-center bg-white rounded-lg border border-spacing-2 border-r-2 border-black p-2 mr-auto">
        <img src={film} alt="icono logo" width="15px" height="15px" />

        <h2 className="">Pepe films</h2>
      </div>
      <h1 className="text-4xl uppercase font-bold mr-auto">
        Buscador de Películas
      </h1>
    </header>
  );
};

export default Header;
