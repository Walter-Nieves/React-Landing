import { Link } from "react-router-dom";
import Footer from "./Footer";
import datos from "../data/info.jsx";
import { useEffect } from "react";

function Destinos() {
  
   useEffect(() => {
        window.scrollTo(0,0);
      }, []);

  return (
    <section className="bg-gray-300 w-screen max-w-[2000px]  h-full flex flex-col justify-center items-center">
      <div className="flex flex-col  justify-center items-center bg-gray-300 w-[84%] ">
        
        <span className=" text-7xl text-center mb-20 mt-32 text-green-500">
          {datos.destinos2.titulo1}
        </span>
        <strong className="animate-bounce mb-20 text-9xl max-md:text-7xl max-md:scale-0 scale-[1.5] bg-[linear-gradient(to_bottom,#FFD700_0%,#FFD700_50%,#0033A0_75%,#CE1126_100%)] bg-clip-text text-transparent">
          {datos.destinos2.titulo2}
        </strong>

        <img
         className="object-contain w-[84%] rounded-xl"
          src={datos.destinos2.imagen1}
          alt=""
        />


        <div className=" flex flex-col w-[84%]">

          <p className="text-justify text-3xl my-10 justify-center max-md:text-5xl">
            {datos.destinos2.parrafo1}
          </p>

          <p className="text-justify text-3xl my-10 justify-center max-md:text-5xl">
            {datos.destinos2.parrafo2}
          </p>

          <p className="text-justify text-3xl my-10 justify-center max-md:text-5xl">
            {datos.destinos2.parrafo3}
          </p>

          <p className="text-justify text-3xl my-10 justify-center max-md:text-5xl">
            {datos.destinos2.parrafo4}
          </p>

          <p className="text-justify text-3xl my-10 justify-center max-md:text-5xl">
            {datos.destinos2.parrafo5}
          </p>

          <p className="text-justify text-3xl my-10 justify-center max-md:text-5xl">
            {datos.destinos2.parrafo6}
          </p>
          
          <p className="text-justify text-3xl my-10 justify-center max-md:text-5xl">
            {datos.destinos2.parrafo7}
          </p>

          <p className="text-justify text-3xl my-10 justify-center max-md:text-5xl">
             {datos.destinos2.parrafo8}
          </p>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Destinos;


