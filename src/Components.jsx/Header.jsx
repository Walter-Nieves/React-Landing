
import { useState } from "react";
import datos from "../data/info.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contacto from "../pages/Contacto.jsx";
import Destinos from "../pages/Destinos.jsx";
import Inicio from "../pages/Inicio.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Destino from "../pages/Destino.jsx";


function Header() {
  const [menu, setMenu] = useState(false);

  const NotFound = () => (
    <div className="min-h-screen  bg-black/90 text-white flex flex-col   text-center px-4">
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

  // Clases para cada nivel
const getUlClasses = (depth) => {
  switch (depth) {
    case 0:
      return "absolute left-0 top-full hidden group-hover/a:block rounded-md shadow-lg z-50"; // Primer nivel
    case 1:
      return "absolute right-full top-0 hidden group-hover/b:block rounded-md shadow-lg z-50 flex justify-center items-center"; // Segundo nivel
    default:
      return "absolute right-full top-0 hidden group-hover/c:block rounded-md shadow-lg z-50"; // Tercer nivel
  }
};

  //Función recursiva que recibe una lista de elementos del menú (items) y un basePath (ruta base acumulativa).
  //basepath es la ruta base acumulativa que se va pasando en la recursión. Se usa para ir construyendo rutas anidadas.
  //  Al principio, basePath es una cadena vacía "". Pero en los subniveles, se va acumulando con los link de los padres.

  const renderMenu = (items = [], basePath = "", depth = 0) =>
    //recorre cada item de navegacion y genera una ruta completa para ese item
    items.map((item, index) => {
      const hasSubmenu = item.subNav || item.subMenu;
      const subItems = item.subNav || item.subMenu;
      //Es la ruta completa del ítem actual. Se forma concatenando basePath con item.link.
      const fullPath = `${basePath}${item.link}`;

      const liClasses = depth === 0 ? "relative group/a" // nivel principal header
        : depth === 1 ? "relative group/b" : "relative group/c w-52 flex justify-center" // nivel ciudades /submenu

      
      const linkClasses = depth === 0
       
        ? "flex  items-center justify-center px-2 h-8 text-white text-xl hover:bg-black/25 transition-colors hover:underline"
        : "flex  items-center justify-center px-2 h-8 text-white text-lg hover:bg-black/25 transition-colors hover:underline flex justify-center";


      // si el item tiene submenu se crea un <li> con el enlace principal
      if (hasSubmenu) {
        return (
          <li
            key={index}
            className={`relative group transition-transform duration-400 ${liClasses} ${
              menu
                ? "max-md:translate-x-0 delay-300"
                : "max-md:translate-x-full delay-0"
            } text-xl font-bold`}
          >
            <Link
              to={fullPath}
               className={linkClasses}
              // className="flex items-center px-2 h-8 text-white text-xl hover:bg-black/25 transition-colors hover:underline"
            >
              {item.nombre}
            </Link>


            {/* dentro, genera un submenú desplegable (<ul>) con la llamada recursiva. */}
            <ul className={getUlClasses(depth)}>
              {renderMenu(subItems, fullPath,depth + 1 || depth + 2)}
            </ul>

          </li>
        );
      }

      return (
        //Si no tiene submenú renderiza un solo <li> con enlace.
        <li
          key={index}
          className={`relative group transition-transform duration-400 ${liClasses} ${
            menu
              ? "max-md:translate-x-0 delay-300"
              : "max-md:translate-x-full delay-0"
          } text-xl font-bold`}
        >
          <Link
            to={fullPath}
            // className="flex items-center px-2 h-8 text-white text-xl hover:bg-black/25 transition-colors hover:underline bg-pink-700 p-4 right-0"
            className={linkClasses}
            onClick={() => setMenu(false)}
          >
            {item.nombre}
          </Link>
        </li>
      );
    });   

  return (
    <BrowserRouter basename="/React-Landing">
      <header className="bg-transparent flex justify-between fixed z-40 w-full items-center select-none">
        <div className="flex space-x-2 items-center">
          <img
            className="w-16 h-18 ml-4 mt-4"
            src={datos.header.logo}
            alt="Mapa de Colombia"
          />
          <h1 className="font-bold font-mono text-2xl text-white">
            {datos.header.titulo}
          </h1>
        </div>

        <nav className="relative">
          <img
            className="h-8 flex md:hidden relative right-14 hover:bg-black/20 hover:rounded-md"
            src="/React-Landing/public/icons/hamburguesa.svg"
            alt="Menú"
            onClick={() => setMenu(!menu)}
          />
          <ul className="relative flex max-md:flex-col max-md:absolute max-md:top-full max-md:right-1 ">
            {renderMenu(datos.header.nav)}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="*" element={<NotFound />} />

        {/* Subrutas dinámicas desde subNav y subMenu */}
        {datos.header.nav.flatMap((navItem) => {
          //rutas para regiones,categoria principal
          const regionPath = navItem.link;
          //ruta para los lugares de las regiones
          const subNavs = navItem.subNav || [];
          //Usa flatMap para APLANAR el resultado final (una lista de rutas sin arrays anidados).
          return subNavs.flatMap((subNavItem) => {
            const baseRegion = subNavItem.link;
            //ruta ciudades o destinos turisticos
            const subMenus = subNavItem.subMenu || [];

            //concatenamos las diferentes direcciones
            //.replace(/^\//, "") quita una / inicial innecesaria si existe,
            //  porque React Router espera rutas sin / inicial si no usas basename.
            const regionOnlyPath = `${regionPath}${baseRegion}`.replace(/^\//, "");

            const regionRoute = (
              <Route
                key={regionOnlyPath}
                path={regionOnlyPath}
                element={<Destino />}
              />
            );

            //Recorre los lugares turísticos dentro de la región.
            const lugarRoutes = subMenus.map((subMenuItem) => {
              //Construye la ruta completa del lugar.
              const fullPath = `${regionPath}${baseRegion}${subMenuItem.link}`;
              return (
                <Route
                  key={fullPath}
                  path={fullPath.replace(/^\//, "")}
                  element={<Destino />}
                />
              );
            });

            //Devuelve un array que incluye:
            //La ruta para la región (regionRoute).
            //Todas las rutas para los lugares (lugarRoutes).
            //Al usar flatMap, se garantiza que todas las rutas se aplanen
            //en un solo array dentro de <Routes>.
            return [regionRoute, ...lugarRoutes];
          });
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Header;


// const datos = {
//   header: {
//     logo: "/React-Landing/public/imagenes/gif-colombia.gif",
//     titulo: "Viaja por Colombia",
//     link: "#",
//     nav: [
//       {
//         nombre: "Inicio",
//         link: "/",
//       },
//       {
//         nombre: "Nosotros",
//         link: "/nosotros",
//       },
//       {
//         nombre: "Destinos",
//         link: "/destinos",
//         subNav: [
//           {
//             nombre: "Andina",
//             link: "/andina",
//             subMenu: [
//               { 
//                  nombre: "Cali",
//                  link: "/cali"
//               },
//               { 
//                  nombre: "Bogotá",
//                  link: "/bogota"
//               },
//               { 
//                  nombre: "Santander",
//                  link: "/santander"
//               },
//               { 
//                  nombre: "Eje cafetero",
//                  link: "/eje-cafetero"
//               },
//               { 
//                  nombre: "Nevado Santa Isabel",
//                  link: "/nevado-santa-isabel"
//               },
//             ],
//           },
//            {
//             nombre: "Caribe",
//             link: "/caribe",
//             subMenu: [
//               { 
//                  nombre: "Barranquilla",
//                  link: "/barranquilla"
//               },
//               { 
//                  nombre: "Cartagena",
//                  link: "/cartagena"
//               },
//               { 
//                  nombre: "Santa Marta",
//                  link: "/santa-marta"
//               },
//               { 
//                  nombre: "Guajira",
//                  link: "/guajira"
//               },
//             ],
//           },
//           {
//             nombre: "Insular",
//             link: "/insular",
//             subMenu: [
//               { 
//                  nombre: "San Andrés",
//                  link: "/san-andres"
//               },
//               { 
//                  nombre: "Islas del Rosario",
//                  link: "/rosario"
//               },
//             ],
//           },
//           {
//             nombre: "Amazonía",
//             link: "/amazonia",
//             subMenu: [
//               { 
//                  nombre: "Amazonas",
//                  link: "/amazonas"
//               },
//             ],
//           },
          
//           {
//             nombre: "Orinoquía",
//             link: "/orinoquia",
//              subMenu: [
//               { 
//                  nombre: "Caño Cristales",
//                  link: "/cano-cristales"
//               },
//             ],
//           },
         
//           {
//             nombre: "Pacífico",
//             link: "/pacifico",
//             subMenu: [
//               { 
//                  nombre: "Chocó",
//                  link: "/choco"
//               },
//             ],
//           },
//         ],
//       },
//       {
//         nombre: "Contacto",
//         link: "/contacto",
//       },
//     ],
//   },
//   destinos: [
//     {
//       imagen: "/React-Landing/public/imagenes/Bogota.webp",
//       titulo: "Bogotá",
//       descripcion:
//         "Mezcla de historia y modernidad, se destacan la Candelaria, el Museo del Oro y Monserrate, con vistas increíbles.",
//       subtitulo: "Nuestra hermosa capital",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/Cartagena2.webp",
//       titulo: "Cartagena",
//       descripcion:
//         "Es reconocida por su rica historia colonial, su arquitectura conservada y su papel clave durante la época de la colonización española.",
//       subtitulo: "Excelentes playas, cultura vibrante y vida nocturna",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/Cali.webp",
//       titulo: "Cali",
//       descripcion:
//         "La música y el baile son parte de la vida cotidiana, además el Barrio San Antonio ofrece una experiencia cultural y bohemia.",
//       subtitulo: "Capital mundial de la salsa",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/choco.webp",
//       titulo: "Chocó",
//       descripcion:
//         "Alberga selvas tropicales vírgenes, manglares, ríos cristalinos y una abundante vida silvestre.",
//       subtitulo: "Avistamiento de ballenas",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/Barranquilla.webp",
//       titulo: "Barranquilla",
//       descripcion:
//         "Cuna del Carnaval más famoso del país, cultura caribeña, historia y modernidad bañados por el río Magdalena y el océano atlántico. ",
//       subtitulo: "'Puerta de oro de Colombia'",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/amazonas.webp",
//       titulo: "Amazonas",
//       descripcion:
//         "Actividades como avistamiento de delfines rosados, senderismo en la selva, y visitas a comunidades indígenas. También permite explorar la triple frontera con Perú y Brasil.",
//       subtitulo: "Leticia, ideal para el ecoturismo",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/sanandres.webp",
//       titulo: "San Andrés",
//       descripcion:
//         "Islas paradisíacas con mar multicolor, perfectas para buceo, snorkel y descanso.",
//       subtitulo: "Conoce nuestro mar de los 7 colores",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/santamarta.webp",
//       titulo: "Santa Marta",
//       descripcion:
//         "Combina playas, selva y cultura indígena. Punto de partida hacia la Ciudad Perdida.",
//       subtitulo: "Lugares paradisíacos rodeados de mucha historia",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/baru.webp",
//       titulo: "Isla Barú e islas del Rosario",
//       descripcion:
//         "Playas de arena blanca y aguas cristalinas cerca de Cartagena. Ideales para relajarse o practicar deportes acuáticos.",
//       subtitulo: "Date el placer de conocer estos lugares",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/ejecafetero.webp",
//       titulo: "Eje cafetero",
//       descripcion:
//         "Sus coloridos pueblos como Salento, los recorridos por fincas de café, y maravillas naturales como el Valle de Cocora, lo hacen perfecto para el ecoturismo y el agroturismo.",
//       subtitulo: "Espectacular recorrido por Quindío, Caldas y Risaralda",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/santander.webp",
//       titulo: "Santander",
//       descripcion:
//         "Considerado uno de los más bonitos de Colombia, ofrece un ambiente colonial encantador y rutas de senderismo como el Camino Real.",
//       subtitulo: "Turismo de aventura",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/cano2.webp",
//       titulo: "Caño cristales",
//       descripcion:
//         "Es un fenómeno natural que ocurre entre julio y noviembre, cuando algas especiales tiñen el agua con colores vibrantes, región rica en biodiversidad.",
//       subtitulo: "El río de los cinco colores",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/guajira2.webp",
//       titulo: "La Guajira",
//       descripcion:
//         "Destinos como Cabo de la Vela y Punta Gallinas ofrecen paisajes únicos donde el mar Caribe se encuentra con el desierto. Es un lugar para el turismo cultural, étnico y de aventura.",
//       subtitulo: "Hogar del pueblo indígena Wayúu.",
//     },
//     {
//       imagen: "/React-Landing/public/imagenes/nevado.webp",
//       titulo: "Nevado de Santa Isabel ",
//       descripcion:
//         "Forma parte del Parque Nacional Natural Los Nevados, hogar de frailejones, cóndores, venados y otras especies únicas del ecosistema de páramo.",
//       subtitulo: "El ascenso es accesible para principiantes.",
//     },
//   ],
// };

// export default datos;

// import { createContext, useContext, useState } from "react";
// import datos from "../data/info.js";
// import { useReducer } from "react";

// const TopicContext = createContext();

// const topics = datos.destinos;

// function TopicProvider({ children }) {
//   const [currentTopic, setCurrentTopic] = useState(0);
//   const [currentCardTopic, setCurrentCardTopic] = useState(0);
//   const [disableButton, setDisableButton] = useState(false);
//   const [backgroundAnimate, setBackgroundAnimate] = useState("");
//   const [growCardAnimate, setGrowCardAnimate] = useState();
//   const [appearAnimate, setAppearAnimate] = useState("animate-infoAppear");
//   const [disappearAnimate,setDisappearAnimate] = useState("");



//   const estiloInicial = {
//     suave: 0,
//     abrupto: 0,
//   };

//   const funcionMover = (estiloActual, moverHacia) => {
//     let { suave, abrupto } = estiloActual;

//     if (moverHacia == "izquierda") {
//       if (suave % topics.length == 0 || suave == 0) {
//         abrupto = suave + topics.length;
//       }
//       suave++;
//     }

//     if (moverHacia == "derecha") {
//       if (suave % topics.length == 0) {
//         abrupto = suave;
//       }

//       suave--;
//     }

//     const nuevoEstilo = { suave, abrupto };

//     return nuevoEstilo;
//   };

//   const [estilo, moverA] = useReducer(funcionMover, estiloInicial);

//   const nextTopic = () => {
   
//     setGrowCardAnimate("animate-downGrowCard");
//     setBackgroundAnimate("animate-downgrade");
//     setTimeout(() => {
//       setAppearAnimate("animate-infoAppear");
      
//     }, 1100);
//     setDisableButton(true);
 
//       if (currentCardTopic >= topics.length - 1) {
//         setCurrentCardTopic(0)
//       } else {
//         setCurrentCardTopic(currentCardTopic + 1)
//       }

//     setTimeout(() => {
//       if (currentTopic >= topics.length - 1) {
//         setCurrentTopic(0);
//       } else {
//         setCurrentTopic(currentTopic + 1);
//       }

//       setBackgroundAnimate("");
//       setGrowCardAnimate("");
//       setAppearAnimate("");
//       setDisableButton(false);
     
//     }, 1000);
    
//   };

//   const prevTopic = () => {

//     setDisableButton(true);

//     setGrowCardAnimate("animate-upGrowCard"); 
//     setBackgroundAnimate("animate-upgrade");

//     setDisappearAnimate("animate-infoDisappear");
    
//     if (currentTopic == 0) {
//       setCurrentTopic(topics.length - 1);
//     } else {
//       setCurrentTopic(currentTopic - 1);
//     }
//     setTimeout(() => {

//       if (currentCardTopic == 0) {
//       setCurrentCardTopic(topics.length - 1);
//     } else {
//       setCurrentCardTopic(currentCardTopic - 1);
//     }

//       setDisableButton(false);
//       setDisappearAnimate("");
//       setGrowCardAnimate("");
//       setBackgroundAnimate("");
//     }, 1000);
//   };


//   return (
//     <TopicContext.Provider
//       value={{
//         topics,
//         currentTopic,
//         nextTopic,
//         prevTopic,
//         backgroundAnimate,
//         estilo,
//         growCardAnimate,
//         appearAnimate,
//         disappearAnimate,
//         currentCardTopic,
     
//       }}
//     >
//       {/* div para los botones */}
//       <div className=" flex w-full justify-center bottom-10 fixed z-50 space-x-10">
//         <button
//           disabled={disableButton}
//           className="ring-2 ring-white rounded-full size-10 flex justify-center items-center"
//           type="button"
//           onClick={() => {
//             prevTopic();
//             moverA("izquierda");
//           }}
//         >
//           <img
//             className="size-6 hover:size-7 transition-[1s]  hover:invert"
//             src="/React-Landing/public/icons/caret-left-fill.svg"
//             alt="left arrow"
//           />
//         </button>
//         <button
//           disabled={disableButton}
//           className=" ring-2 ring-white rounded-full size-10 flex justify-center items-center"
//           type="button"
//           onClick={() => {
//             nextTopic();
//             moverA("derecha");
//           }}
//         >
//           <img
//             className="size-6 hover:size-7 transition-[1s]  hover:invert"
//             src="/React-Landing/public/icons/caret-right-fill.svg "
//             alt="right arrow"
//           />
//         </button>
//       </div>
//       {children}
//     </TopicContext.Provider>
//   );
// }

// export function useTopic() {
//   const context = useContext(TopicContext);
//   if (!context) {
//     throw new Error("Para usar useTopic, debe estar dentro de TopicProvider");
//   }
//   return context;
// }

// export default TopicProvider;

// import Header from "./Header.jsx";
// import Background from "./Background.jsx";
// import TopicProvider from "../Contests/TopicContext.jsx";
// import Cards from "./Cards.jsx";
// import GrowCard from "./GrowCard.jsx";

// function App() {
//   return (
//     <div>
//       <Header />
//       <main className="overflow-hidden">
//         <TopicProvider>
//           <Background />
//           <Cards />
//           <GrowCard />
//         </TopicProvider>
//       </main>
//     </div>
//   );
// }

// export default App;

// import { useLocation } from "react-router-dom";

// function Destino() {
//     //pathname extrae la URL actual.
//   const { pathname } = useLocation();

// //pathname.split("/"): divide la cadena en partes por cada /.
// //Resultado: ["", "regiones", "caribe", "cartagena"]
// //.filter(Boolean): elimina los elementos vacíos (como el primero), dejándote:
// //["regiones", "caribe", "cartagena"]

//   const partes = pathname.split("/").filter(Boolean); // elimina elementos vacíos

// //partes.at(-1): obtiene el último segmento, es decir, el lugar (ej. "cartagena").
// //.replace("-", " "): convierte guiones en espacios. Ej: "santa-marta" → "santa marta".
//   const lugar = partes.at(-1)?.replace("-", " ");

// //Si hay más de dos partes en la URL (por ejemplo, hay región y lugar):
// //partes.at(-2): toma la penúltima parte (la región).
// //Si no, se asume que la región es igual al lugar (para rutas como /caribe sin lugar específico).
//   const region = partes.length > 2 ? partes.at(-2)?.replace("-", " ") : lugar;

//   return (
//     <div className="min-h-screen text-white bg-gradient-to-b from-black to-gray-900 p-6 text-center">
//       <h1 className="text-4xl font-bold mb-4 capitalize">
//         {lugar} {region !== lugar ? `– Región ${region}` : ""}
//       </h1>
//       <p className="text-lg">
//         Bienvenido a <strong>{lugar}</strong>{region !== lugar ? ` en la región ${region}` : ""}.
//       </p>
//     </div>
//   );
// }

// export default Destino;

// esto lo tengo creado hasta ahora y me funciona perfecto pero quiero mantener las rutas en App.jsx (limpio y profesional) y dejamos que Header.jsx solo se encargue de renderizar el menú, el resto del codigo con las clases de css dejalas tal cual como estan ayudame con la logica de las rutas y el header que aparezca en los demas componentes







