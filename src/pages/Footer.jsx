import datos from "../data/info.jsx";
import wna11 from "/icons/wna11.webp";

function Footer() {
  return (
    <section className="flex flex-row justify-around bg-gray-500  w-screen  max-md:flex-col max-md:justify-center">
      {datos.fotterTexto.map((info, index) => (
        <div key={index} className="flex flex-col max-md:text-center ">
          <span className="text-white pl-2 max-md:text-3xl">{info.texto1}</span>
          <span className="text-white pl-2 max-md:text-3xl">{info.texto2}</span>
          <span className="text-white pl-2 max-md:text-3xl">{info.texto3}</span>
          <span className="text-white pl-2 max-md:text-3xl">{info.texto4}</span>
          <span className="text-white pl-2 max-md:text-3xl">{info.texto5}</span>
          <span className="text-white pl-2 max-md:text-3xl">{info.texto6}</span>
        </div>
      ))}

      {datos.fotterTexto.map((info, index) => (
        <div key={index} className="flex flex-col items-center  space-y-14 max-md:items-center max-md:justify-center">
          <span className="text-white max-md:text-4xl">{info.texto7}</span>

          <div className="flex flex-row justify-center items-center  max-md:gap-8 gap-11 max-md:flex  max-md:flex-col max-md:items-center max-md:justify-center" >
            {datos.fotterIconos.map((icono, index) => (
              <div key={index} className="max-md:flex  max-md:items-center max-md:justify-center ">
                <span>
                  <img
                    className="cursor-pointer transition-transform duration-300 hover:scale-125 w-[2rem] "
                    src={icono.icono}
                    alt={icono.nombre}
                  />
                </span>
                {/* <span>
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-125"
              src="public/icons/facebook.svg"
              alt="Facebook"
            />
          </span>
          <span>
          <img
              className="cursor-pointer transition-transform duration-300 hover:scale-125"
              src="public/icons/twitter-x.svg"
              alt="X"
            />
          </span>
          <span>
          <img
          className="cursor-pointer transition-transform duration-300 hover:scale-125"
          src="public/icons/youtube.svg"
          alt="YouTube"
          />
          </span> */}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* div animado */}
      <div className="flex flex-col items-center justify-center ">
        <br />
        {/* animacion */}
        <div className="w-[5rem]  overflow-hidden rounded-full shadow-md shadow-white flex items-center justify-center">
          <br />

          <div className="flex animate-movement hover:animate-[movement_3s_linear_infinite]">
            <img className="w-[5rem] h-[5rem] object-cover" src={wna11} />
            <img className="w-[5rem] h-[5rem] object-cover" src={wna11} />
            <img className="w-[5rem] h-[5rem] object-cover" src={wna11} />
            <img className="w-[5rem] h-[5rem] object-cover" src={wna11} />
            <img className="w-[5rem] h-[5rem] object-cover" src={wna11} />
          </div>
        </div>
        <br />
        {datos.fotterTexto.map((info, index) => (
          <div key={index}>
            <span className="text-white mr-4 max-md:text-4xl">
              {info.texto8}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footer;
