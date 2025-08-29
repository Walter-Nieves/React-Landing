import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Header from "./Header.jsx";
import Background from "./Background.jsx";
import TopicProvider, { useTopic } from "../Contests/TopicContext.jsx";
import Cards from "./Cards.jsx";
import GrowCard from "./GrowCard.jsx";
import datos from "../data/info.jsx";

// Páginas estáticas
import Contacto from "../pages/Contacto.jsx";
import Destinos from "../pages/Destinos.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Destino from "../pages/Destino.jsx";
import rightarrow from "/icons/caret-right-fill.svg"
import leftarrow from "/icons/caret-left-fill.svg"

// Página 404
const NotFound = () => (
  <div className="min-h-screen bg-black/90 text-white flex flex-col text-center px-4">
    {/* Título grande de error */}
    <h2 className="text-6xl font-bold mb-4">404</h2>
    <p className="text-xl mb-6">Lo sentimos, la página que buscas no existe.</p>
    <Link
      to="/"
      className="text-blue-400 hover:underline hover:text-blue-200 text-lg"
    >
      Regresa al inicio
    </Link>
  </div>
);

// Nueva función que controla si estamos en inicio
function ShowInicioContent() {
  const location = useLocation(); // obtenemos la ruta actual
  const isInicio = location.pathname === "/";

  if (!isInicio) return null;

  return (
    <TopicProvider>
      {/* Contenido solo visible en Inicio */}
      <Background />
      <Cards />
      <GrowCard />
      <NavegacionBotones />
    </TopicProvider>
  );
}

// Botones de navegación, usan el contexto
function NavegacionBotones() {
  const { prevTopic, nextTopic, moverA, disableButton } = useTopic();

  return (
    <div className="flex w-full justify-center bottom-10 fixed z-40 space-x-10">
      <button
        disabled={disableButton}
        className="ring-2 ring-white rounded-full size-10 flex justify-center items-center"
        type="button"
        onClick={() => {
          prevTopic();
          moverA("izquierda");
        }}
      >
        <img
          className="size-6 hover:size-7 transition-[1s] hover:invert"
          src={leftarrow}
          alt="left arrow"
        />
      </button>
      <button
        disabled={disableButton}
        className="ring-2 ring-white rounded-full size-10 flex justify-center items-center"
        type="button"
        onClick={() => {
          nextTopic();
          moverA("derecha");
        }}
      >
        <img
          className="size-6 hover:size-7 transition-[1s] hover:invert"
          src={rightarrow}
          alt="right arrow"
        />
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/React-Landing">
      {/* Encabezado visible en todas las páginas */}
      <Header />
      <main className="flex w-screen justify-center bg-gray-300">
        {/* Mostrar contenido de inicio solo si la ruta es "/" */}
        {/* <ShowInicioContent /> */}

        {/* Definición de rutas */}
        <Routes>
          {/* Rutas estáticas */}
          <Route path="/" element={<ShowInicioContent />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/destinos" element={<Destinos />} />
          {/* Página 404 si la ruta no coincide */}
          <Route path="*" element={<NotFound />} />

          {/* Rutas dinámicas desde datos.js */}
          {datos.header.nav.flatMap((navItem) => {
            // Ruta base de cada región (ejemplo: /caribe, /pacifico, etc.)
            const regionPath = navItem.link;
            // Submenús de cada región
            const subNavs = navItem.subNav || [];

            // Recorremos los submenús para generar rutas de regiones y lugares
            return subNavs.flatMap((subNavItem) => {
              // Ruta de la región (ej: /caribe/cartagena)
              const baseRegion = subNavItem.link;
              // Lugares dentro de la región
              const subMenus = subNavItem.subMenu || [];

              // Ruta solo de región (ej: /caribe)
              const regionOnlyPath = `${regionPath}${baseRegion}`.replace(
                /^\//,
                ""
              );

              // Creamos una ruta para la región
              const regionRoute = (
                <Route
                  key={regionOnlyPath}
                  path={regionOnlyPath}
                  element={<Destino />}
                />
              );

              // Creamos rutas para cada lugar dentro de la región
              const lugarRoutes = subMenus.map((subMenuItem) => {
                // Ruta completa (ej: /caribe/cartagena/playa-blanca)
                const fullPath = `${regionPath}${baseRegion}${subMenuItem.link}`;
                return (
                  <Route
                    key={fullPath}
                    path={fullPath.replace(/^\//, "")}
                    element={<Destino />}
                  />
                );
              });

              // Retorna tanto la ruta de región como las de lugares
              return [regionRoute, ...lugarRoutes];
            });
          })}
        </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;
