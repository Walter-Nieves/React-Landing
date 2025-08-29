import datos from "../data/info.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";

function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-300 w-screen max-w-[2000px] h-full flex flex-col justify-center items-center ">
      {datos.nosotros.map((info, index) => (
        <div
          key={index}
          className="bg-gray-300 w-[100%]  flex flex-col flex-wrap items-center justify-center "
        >
          <div className="bg-gray-300 flex flex-col flex-wrap  w-[84%]  justify-center items-center">
            <strong className="text-[5rem] my-20 text-center max-md:text-7xl ">
              {info.titulo}
            </strong>
            <span className=" text-6xl text-center mb-24 w-[50%]  text-green-500">
              {info.subtitulo}
            </span>
            <img
              className="object-contain w-[84%] rounded-xl"
              src={info.imagen}
            />
            <p className="text-justify   text-3xl mt-10 w-[84%] justify-center max-md:text-4xl ">
              {info.parrafo1}
            </p>
            <p className="text-justify   text-3xl mt-10 w-[84%] justify-center max-md:text-4xl ">
              {info.parrafo2}
            </p>
          </div>
        </div>
      ))}
       
      <div className="bg-gray-300 h-[100%] w-[84%] flex flex-wrap justify-center items-center p-10">
        {datos.valores.map((item, index) => (
          <div
            key={index}
            className="bg-blue-300 m-10  h-[50%] w-[39%] max-md:w-[100%] max-tablet:w-[50%]  p-4 flex flex-col
              items-center justify-center rounded-xl hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl"
          >
            <div className="rounded-full bg-gray-300 w-10 h-10 flex justify-center items-center">
              <img
                className="hover:scale-125 transition-transform  max-md:w-8"
                src={item.icono}
              />
            </div>
            <span className="text-5xl text-center font-extrabold max-md:text-5xl">
              {item.titulo}
            </span>
            <p className="text-justify text-3xl mt-5  max-md:text-4xl">
              {item.texto}
            </p>
          </div>
        ))}

        {/* <div className="bg-blue-300 m-10 h-[30rem] w-96  p-2 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl">
            <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center">
              <img
                className="hover:scale-150 transition-transform"
                src="public/icons/tv-fill.svg"
              />
            </div>
            <span className="text-5xl font-extrabold">Vision</span>
            <p className="text-3xl mt-5 text-center">
              Buscamos establecer ecosistemas de viajes sustentables para toda
              la cadena del turismo y brindar a viajeros de todo el mundo,
              información actualizada y destinos turísticos seguros.
            </p>
          </div>

          <div className="bg-blue-300 m-10 h-[30rem] w-96  p-2 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl">
            <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center">
              <img
                className="hover:scale-150 w-5 transition-transform"
                src="public/icons/people-fill.svg"
              />
            </div>
            <span className="text-5xl font-extrabold">Lo que somos</span>
            <p className="text-3xl mt-5 text-center">
              Somos una red de viajeros enamorados de Colombia, que ayudan a
              otros viajeros a escoger los mejores destinos, coordinar los
              desplazamientos, hospedajes y los acompañan virtualmente logrando
              que disfruten su viaje al máximo.
            </p>
          </div> */}

        {datos.nosotros.map((info, index) => (
          <div
            key={index}
            className="bg-gray-300 w-[84%] flex flex-col justify-center items-center"
          >
            <p className="text-justify text-3xl mt-5 justify-center max-md:text-5xl">
              {info.parrafo3}
            </p>
            <span className="mt-8 text-6xl text-center  text-green-500">
              {info.subtitulo2}
            </span>
            <p className="text-justify text-3xl mt-5 justify-center max-md:text-5xl ">
              {info.parrafo4}
            </p>
          </div>
        ))}

        {datos.nosotros.map((info, index) => (
          <div
            key={index}
            className=" w-[84%] mt-10  flex flex-row max-md:flex-col max-md:space-y-10  justify-between items-center max-md:items-center max-md:justify-center"
          >
            <div className=" space-y-11 w-[50%] max-md:w-[100%]">
              <div className="bg-yellow-400 w-[100%] pl-2  group hover:shadow-xl transition-all duration-500 ease-in-out   p-4 rounded-3xl flex flex-row justify-around">
                <div className=" transition-transform w-[55%]  duration-500 ease-in-out group-hover:scale-105 max-md:text-2xl">
                  {info.titulo2}
                </div>
                <div className=" transition-transform w-[10%] duration-500 ease-in-out group-hover:scale-105 max-md:text-2xl">
                  {info.porcentaje2}
                </div>
              </div>

              <div className="bg-blue-400 w-[100%] pl-2  group hover:shadow-xl transition-all duration-500 ease-in-out   p-4 rounded-3xl flex flex-row justify-around">
                <div className=" transition-transform w-[55%]  duration-500 ease-in-out group-hover:scale-105 max-md:text-2xl">
                  {info.titulo3}
                </div>
                <div className=" transition-transform w-[10%] duration-500 ease-in-out group-hover:scale-105 max-md:text-2xl">
                  {info.porcentaje3}
                </div>
              </div>

              <div className="bg-red-500 w-[100%] pl-2  group hover:shadow-xl transition-all duration-500 ease-in-out   p-4 rounded-3xl flex flex-row justify-around" >
                <div className=" transition-transform w-[55%]  duration-500 ease-in-out group-hover:scale-105 max-md:text-2xl">
                  {info.titulo4}
                </div>
                <div className=" transition-transform w-[10%] duration-500 ease-in-out group-hover:scale-105 max-md:text-2xl">
                  {info.porcentaje4}
                </div>
              </div>
            </div>

            <div>
              <img
                className="w-[120%] h-80  aspect-square rounded-xl hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl"
                src={info.imagen2}
              />
            </div>
          </div>
        ))}

        {datos.nosotros.map((info, index) => (
          <div key={index} className="bg-gray-300 flex flex-col w-[84%]">
            <span className="mt-8 text-6xl text-center  text-green-500">
              {info.subtitulo3}
            </span>
            <p className="text-justify text-3xl mt-10 pb-2 justify-center max-md:text-5xl">
              {info.parrafo5}
            </p>
          </div>
        ))}

        {datos.elegirnos.map((info, index) => (
          <div
            key={index}
            className="bg-blue-300 m-10 h-auto w-[39%] max-md:w-[100%]   p-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl"
          >
            <div className="rounded-full bg-gray-300 w-[2.5rem] max-md:w-[3rem] h-10 flex justify-center items-center">
              <img
                className="hover:scale-150 w-4 transition-transform max-md:w-8"
                src={info.icono}
              />
            </div>
            <span className="text-3xl font-extrabold max-md:text-5xl">{info.titulo}</span>
            <p className="text-justify text-3xl mt-5  max-md:text-5xl">{info.parrafo}</p>
          </div>
        ))}

        {/* <div className="bg-blue-300 m-10 h-[30rem] w-96  p-2 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl">
                <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center">
                  <img
                    className="hover:scale-150 w-5 transition-transform"
                    src="public/icons/person-check-fill.svg"
                  />
                </div>
                <span className="text-3xl font-extrabold">
                  Planes Personalizados
                </span>
                <p className="text-3xl mt-5 text-center">
                  Coordinamos todos los detalles de tu viaje, desde el
                  alojamiento hasta el transporte y las actividades.
                </p>
              </div>

              <div className="bg-blue-300 m-10 h-[30rem] w-96  p-2 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl">
                <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center">
                  <img
                    className="hover:scale-150 w-4 transition-transform"
                    src="public/icons/person-square.svg"
                  />
                </div>
                <span className="text-3xl font-extrabold">
                  Atención Virtual
                </span>
                <p className="text-3xl mt-5 text-center">
                  Tenemos diversos canales de contacto, para que puedas planear
                  tu viaje en Colombia como siempre lo has soñado.
                </p>
              </div>
              <div className="bg-blue-300 m-10 h-[30rem] w-96  p-2 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-xl">
                <div className="rounded-full bg-gray-200 w-10 h-10 flex justify-center items-center">
                  <img
                    className="hover:scale-150 w-6 transition-transform"
                    src="public/icons/person-arms-up.svg"
                  />
                </div>
                <span className="text-3xl font-extrabold">Acompañamiento</span>
                <p className="text-3xl mt-5 text-center">
                  Te acompañamos durante tu estadía para resolver cualquier duda
                  que encuentres, logrando que disfrutes tu viaje al máximo.
                </p>
              </div> */}
      </div>

      <Footer/>
    </section>
  );
}

export default Nosotros;
