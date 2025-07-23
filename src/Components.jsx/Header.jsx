import { useState } from "react";
import datos from "../data/info.js";

const Enlace = ({children,to,hookMenu}) =>{
    return(
        <li className={` transition-transform duration-400 ${hookMenu ? "max-md:translate-x-0" : "max-md:translate-x-full"} ${hookMenu ? "delay-300" : "delay-0"} text-xl font-bold`}>
            <a href={to} className="flex items-center px-2 h-8 text-white text-xl hover:bg-black/25
              transition-colors hover:underline ">{children}</a>
        </li>
    );
};

function Header() {

  const [menu,setMenu] = useState(false);
  return (
    <header className="z-10 bg-transparent flex  justify-between fixed w-full items-center select-none">
      <div className="flex space-x-2 items-center ">
        <img className="bg-transparent rounded-none w-16 h-18 ml-4 mt-4 " src={datos.header.logo} alt="Mapa de Colombia" />
        <h1 className="font-bold font-mono text-2xl text-white ">{datos.header.titulo}</h1>
      </div>
      <nav className="relative">
          <img className="text-white h-8 flex md:hidden relative right-14 hover:bg-black/20 hover:rounded-md" 
          src="/React-Landing/public/icons/hamburguesa.svg" alt="Menú" onClick={()=>setMenu(!menu)} />
        <ul className="flex max-md:flex-col max-md:absolute max-md:top-full max-md:right-1">

            {datos.header.nav.map((enlace,posicion)=>{
                return <Enlace to={enlace.link} key={posicion} hookMenu={menu}> {enlace.nombre} </Enlace>
            })}
            {/* <Enlace to="#" >Inicio</Enlace>
            <Enlace to="#" >Nosotros</Enlace>
            <Enlace to="#" >Paquetes turisticos</Enlace>
            <Enlace to="#" >Vuelo + Hotel</Enlace>
            <Enlace to="#" >Contacto</Enlace> */}

        </ul>
      </nav>
    </header>
  );
}

export default Header;
