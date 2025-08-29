// Importa el hook que te da la URL actual (pathname, search, etc.)
import { useLocation } from "react-router-dom";
// Importa el JSON/objeto con las regiones y lugares (tu datos.js)
import datos from "../data/info.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";

// Declara el componente de página dinámica "Destino"
function Destino() {
  // Obtiene el objeto de ubicación del router (incluye pathname como "/regiones/andina/cali")
  const { pathname } = useLocation();

   //Cada vez que cambie el pathname, ejecuta scrollTo(0,0)
  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  // Separa la ruta por "/" y elimina strings vacíos para quedarte con partes limpias
  const partes = pathname.split("/").filter(Boolean);
  // Ejemplo práctico: "/regiones/andina/cali" → ["regiones", "andina", "cali"]

  // Toma el slug de la región (segunda parte de la URL: índice 1)
  const regionSlug = partes[1];
  // Toma el slug del lugar si existe (tercera parte de la URL: índice 2)
  const lugarSlug = partes[2];

  // Busca en datos.regiones la región cuyo "slug" coincida con lo que vino en la URL
  const region = datos.regiones.find(
  (r) => r.slug.toLowerCase() === regionSlug.toLowerCase()
);

  // Si hay región, busca dentro de sus "lugares" el que coincida con el slug de la URL (si vino)
  const lugar = region?.lugares?.find((l) => l.slug === lugarSlug);

  // Si NO se encontró una región válida para el slug dado...
  if (!region ) {
    // ...renderiza una vista simple de error centrada
    return (
      /* Contenedor a pantalla completa, centrado y con fondo oscuro */
      <section className="min-h-screen flex items-center justify-center text-white bg-gray-900">
        {/* Mensaje de error breve */}
        <h2 className="text-3xl font-bold">Destino no encontrada</h2>
      </section>
    );
  }

  // Si sí hay región (y opcionalmente lugar), renderiza el contenido dinámico
  return (
    /* Sección principal con gradiente vertical y padding */
    <section className="bg-red-300 w-screen  max-w-[2000px] h-full  flex flex-col justify-center items-center">
             {/* contenedor de regiones */}
      {!lugarSlug && (
        <div className="w-[100%] h-full bg-gray-300 flex flex-col justify-center items-center">
          <h2  className=" text-7xl text-center mb-20 mt-28  text-green-500">{region.titulo}</h2>
          <p className="text-3xl w-[84%] my-10 text-justify justify-center max-md:text-5xl">{region.parrafo1}</p>

          <img
            className="object-contain w-[84%] rounded-xl"
            src={region.imagen}
            alt={region.titulo}
          />

          {/* Bloque de texto: elige parrafos del lugar si existe; si no, los de la región */}
          <div className="w-[84%]">
            
            <p className="text-3xl my-10 text-justify justify-center max-md:text-5xl">{region.parrafo2}</p>
            <p className="text-3xl my-10 text-justify justify-center max-md:text-5xl">{region.parrafo3}</p>
            <p className="text-3xl my-10 text-justify justify-center max-md:text-5xl">{region.parrafo4}</p>
            <p className="text-3xl my-10 text-justify justify-center max-md:text-5xl">{region.parrafo5}</p>
            <p className="text-3xl my-10 text-justify justify-center max-md:text-5xl">{region.parrafo6}</p>
            <p className="text-3xl my-10 text-justify justify-center max-md:text-5xl">{region.parrafo7}</p>
            <p className="text-3xl my-10 text-justify justify-center max-md:text-5xl">{region.parrafo8}</p>
          </div>
        </div>
      )}
         {/* contenedor de los lugares turisticos */}
      {lugarSlug && (
        <div className="w-[100%] h-full bg-gray-300 flex flex-col justify-center items-center">
          <h2 className="text-7xl mt-36 font-extrabold text-center text-blue-600 mb-10">
            {lugar.titulo}
          </h2>

              <img
                className="object-contain w-[63%] rounded-xl"
                src={lugar.imagen}
                alt={lugar.titulo}
              />
              <p  className="text-3xl text-justify w-[63%] my-10 justify-center max-md:text-5xl">
                {lugar.parrafo1}
              </p>
              <p  className="text-3xl text-justify w-[63%] my-10 justify-center max-md:text-5xl">
                {lugar.parrafo2}
              </p>
              <p  className="text-3xl text-justify w-[63%] my-10 justify-center max-md:text-5xl">
                {lugar.parrafo3}
              </p>

              <img
                className="object-contain w-[63%] rounded-xl"
                src={lugar.imagen2}
                alt={lugar.titulo}
              />
              <p  className="text-3xl text-justify w-[63%] my-10 justify-center max-md:text-5xl">
                {lugar.parrafo4}
              </p>
              <p  className="text-3xl text-justify w-[63%] my-10 justify-center max-md:text-5xl">
                {lugar.parrafo5}
              </p>
              <p  className="text-3xl text-justify w-[63%] my-10 justify-center max-md:text-5xl">
                {lugar.parrafo6}
              </p>
              <p  className="text-3xl text-justify w-[63%] my-10 justify-center max-md:text-5xl">
                {lugar.parrafo7}
              </p>
              <p  className="text-3xl text-justify w-[63%] my-10 justify-center max-md:text-5xl">
                {lugar.parrafo8}
              </p>

        </div>
      )}
      <Footer/>
    </section>
  );
}


export default Destino;



