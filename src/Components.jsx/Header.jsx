
import { useState } from "react";
import datos from "../data/info.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contacto from "../pages/Contacto.jsx";
import Destinos from "../pages/Destinos.jsx";
import Inicio from "../pages/Inicio.jsx";
import Nosotros from "../pages/Nosotros.jsx";

function Header() {
  const [menu, setMenu] = useState(false);

  const NotFound = () => (
    <div className="min-h-screen  bg-black/90 text-white flex flex-col   text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Lo sentimos, la página que buscas no existe.</p>
      <Link
        to="/"
        className="text-blue-400 hover:underline hover:text-blue-200 text-lg"
      >
        Volver al inicio
      </Link>
    </div>
  );

  const renderMenu = (items = "") =>
    items.map((item, index) => {

      const hasSubmenu = item.subNav || item.subMenu;
      const subItems = item.subNav || item.subMenu;

      if (hasSubmenu) {
        return (
          <li
            key={index}
            className={`relative group transition-transform duration-400 ${
              menu
                ? "max-md:translate-x-0 delay-300"
                : "max-md:translate-x-full delay-0"
            } text-xl font-bold`}
          >
            <Link
              to={item.link}
              className="flex items-center px-2 h-8 text-white text-xl hover:bg-black/25 transition-colors hover:underline"
            >
              {item.nombre}
            </Link>

            <ul className="bg-black/25 hidden absolute group-hover:block top-full rounded-b-md z-50">
              {renderMenu(subItems, item.link)}
            </ul>
          </li>
        );
      }

      return (
        <li
          key={index}
          className={`transition-transform duration-400 ${
            menu
              ? "max-md:translate-x-0 delay-300"
              : "max-md:translate-x-full delay-0"
          } text-xl font-bold`}
        >
          <Link
            to={item.link}
            className="flex items-center px-2 h-8 text-white text-xl hover:bg-black/25 transition-colors hover:underline"
            onClick={() => setMenu(false)} // cierra el menú al hacer clic
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
          <ul className="flex max-md:flex-col max-md:absolute max-md:top-full max-md:right-1">
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

        {/* Subrutas desde subNav o subMenu */}
        {datos.header.nav.flatMap((item) =>
          (item.subNav || item.subMenu || []).map((subItem, i) => (
            <Route
              key={`${item.nombre}-${i}`}
              path={subItem.link.replace("/", "")}
              // element={<p>Estás en la región {subItem.nombre}</p>}
            />
          ))
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Header;





























// import { useState } from "react";
// import datos from "../data/info.js";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Contacto from "../pages/Contacto.jsx";
// import Destinos from "../pages/Destinos.jsx";
// import Inicio from "../pages/Inicio.jsx";
// import Nosotros from "../pages/Nosotros.jsx";

// const NavItem = ({ children, adonde, hookMenu }) => {
//   return (
//     <li
//       className={` transition-transform duration-400 ${
//         hookMenu ? "max-md:translate-x-0" : "max-md:translate-x-full"
//       } ${hookMenu ? "delay-300" : "delay-0"} text-xl font-bold`}
//     >
//       <Link
//         to={adonde}
//         className="flex items-center px-2 h-8 text-white text-xl hover:bg-black/25
//               transition-colors hover:underline "
//       >
//         {children}
//       </Link>
//     </li>
//   );
// };

// const NavMenu = ({ children, adonde, items }) => {
//   return (
//     <div className="relative">
//       <NavItem adonde={adonde}>{children}</NavItem>

//       <ul className="bg-black/25 hidden absolute  group-hover:block top-full rounded-b-md">
//         {items.map((item, index) => {
//           const ruta = adonde + item.adonde;
//           return (
//             <NavItem adonde={ruta} key={index}>
//               {item.nombre}
//             </NavItem>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// function Header() {
//   const [menu, setMenu] = useState(false);
//   return (
//     <BrowserRouter>
//       <header className=" bg-transparent flex  justify-between fixed z-40 w-full items-center select-none">
//         <div className="flex space-x-2 items-center ">
//           <img
//             className="bg-transparent rounded-none w-16 h-18 ml-4 mt-4 "
//             src={datos.header.logo}
//             alt="Mapa de Colombia"
//           />
//           <h1 className="font-bold font-mono text-2xl text-white ">
//             {datos.header.titulo}
//           </h1>
//         </div>
//         <nav className="relative">
//           <img
//             className="text-white h-8 flex md:hidden relative right-14 hover:bg-black/20 hover:rounded-md"
//             src="/React-Landing/public/icons/hamburguesa.svg"
//             alt="Menú"
//             onClick={() => setMenu(!menu)}
//           />
//           <ul className="flex max-md:flex-col max-md:absolute max-md:top-full max-md:right-1">
//                 {/* menu principal desde datos.js */}
//             {datos.header.nav.map((enlace, posicion) => (
//               <NavItem adonde={enlace.link} key={posicion} hookMenu={menu}>
//                 {enlace.nombre}
//               </NavItem>
//             ))}

//             {/* <NavItem adonde="/React-Landing/">Inicio</NavItem> */}

//              {/* submenu de destinos */}
//             <NavMenu
//               adonde="/destinos"
//               items={datos.header.subNav.map((item) => ({
//                 adonde: item.link,
//                 nombre: item.nombre,
//               }))}
//               // items={[
//               //   {
//               //     adonde: "/insular",
//               //     nombre: "Insular",
//               //   },
//               //   {
//               //     adonde: "/amazonia",
//               //     nombre: "Amazonia",
//               //   },
//               //   {
//               //     adonde: "/andina",
//               //     nombre: "Andina",
//               //   },
//               //   {
//               //     adonde: "/orinoquia",
//               //     nombre: "OrinoquÍa",
//               //   },
//               //   {
//               //     adonde: "/caribe",
//               //     nombre: "Caribe",
//               //   },
//               //   {
//               //     adonde: "/pacifico",
//               //     nombre: "PacÍfico",
//               //   },
//               // ]}
//             >
//               {/* <NavItem adonde="/courses/cocina">Cocina</NavItem>
//               <NavItem adonde="/courses/programacion">Programacion</NavItem>
//               <NavItem adonde="/courses/dibujo">Dibujo</NavItem> */}
//               Destinos
//             </NavMenu>

//             {/* <NavItem adonde="/nosotros">Nosotros</NavItem>
//             <NavItem adonde="/contacto">Contacto</NavItem> */}

//             {/* {datos.header.nav.map((enlace,posicion)=>{
//                 return <Enlace to={enlace.link} key={posicion} hookMenu={menu}> {enlace.nombre} </Enlace>
//             })} */}
//             {/* <Enlace to="#" >Inicio</Enlace>
//             <Enlace to="#" >Nosotros</Enlace>
//             <Enlace to="#" >Paquetes turisticos</Enlace>
//             <Enlace to="#" >Vuelo + Hotel</Enlace>
//             <Enlace to="#" >Contacto</Enlace> */}
//           </ul>
//         </nav>
//       </header>
//       <Routes>
//         <Route path="/" element={<Inicio />} />
//           <Route path="/contacto" element={<Contacto />} />
//           <Route path="/nosotros" element={<Nosotros />} />

//         <Route path="/destinos">
//           <Route index element={<Destinos />} />
//           {datos.header.subNav.map((item,index)=>(
//             <Route
//             key={index}
//             path={item.link.replace("/","")}
//             // element={<p>estas en la region {item.nombre}</p>}
//             />
//           ))}
//           {/* <Route path="insular" />
//           <Route path="amazonia" />
//           <Route path="andina" />
//           <Route path="orinoquia" />
//           <Route path="caribe" />
//           <Route path="pacifico" />
//           <Route path="*" /> */}
//         </Route>

//         {/* <Route path="*" element={<p className="text-red-500">Error 404</p>} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Header;
