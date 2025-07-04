import datos from "../data/info";

const Enlace = ({children,to}) =>{
    return(
        <li>
            <a href={to} className="flex items-center px-2 h-8 hover:bg-black/25
             hover:text-white transition-colors hover:underline ">{children}</a>
        </li>
    );
};

function Header() {
  return (
    <header className="bg-red-100 flex justify-between fixed w-full items-center">
      <div className="flex space-x-2 items-center">
        <img className="rounded-none w-16 h-18 ml-4 mt-4" src={datos.header.logo} alt="Mapa de Colombia" />
        <h1 className="font-bold font-mono text-2xl ">{datos.header.titulo}</h1>
      </div>
      <nav>
        <ul className="flex ">

            {datos.header.nav.map((enlace,posicion)=>{
                return <Enlace to={enlace.link} key={posicion}>{enlace.nombre}</Enlace>
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
