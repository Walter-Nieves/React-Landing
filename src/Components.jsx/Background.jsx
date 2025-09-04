
import { useTopic } from '../Contests/TopicContext.jsx'
// import datos from '../data/info.js';
import { useRef } from 'react';


function Background() {

  const refInfo = useRef();

  const {topics,currentTopic,backgroundAnimate,appearAnimate,disappearAnimate} = useTopic();

  return (
    //div principal
    <div  className= {`fixed -z-50 w-screen h-screen flex justify-center ${backgroundAnimate}`}>
      {/* div para el fondo */} 
      <div className='absolute  flex  left-0 right-0 top-0 bottom-0 select-none'>
        <img className='w-full h-full object-cover select-none' src={topics[currentTopic].imagen} alt="Imagen"/>
        <div className='absolute flex w-full h-full bg-gradient-to-b from-black/5 via-transparent to-transparent'></div>
      </div> 
     
      {/* div de informacion */}
      <div ref={refInfo}  className={`flex flex-col justify-center items-center w-[34.4rem] max-w-[37.5rem] max-sm:w-[25rem] h-[17.5rem] max-tablet:h-40 max-xs:h-24 max-sm:h-28 max-md:h-36
       absolute top-[34%] max-xl:top-96 max-tablet:top-24 max-md:left-6 max-sm:top-32 max-sm:left-12 max-xs:top-28 left-2 right-0 p-2 rounded-lg text-center space-y-[-2rem] ${appearAnimate ? "bg-black/25" : "bg-black/0"} hide-cell-horizontal `}>
        <div className="pb-[6rem] overflow-hidden" >  <strong style={{"--delay-anim":"0.1s"}} className= {`text-white opacity-0 text-7xl max-md:text-6xl max-sm:text-4xl select-none ${disappearAnimate} ${appearAnimate}`}>{topics[currentTopic].titulo}</strong></div>
        <div className='pb-[4rem]  overflow-hidden max-tablet:hidden' ><span style={{"--delay-anim":"0.2s"}} className={`text-white text-3xl opacity-0 select-none ${disappearAnimate} ${appearAnimate}`}>{topics[currentTopic].subtitulo}</span></div>
        <div className='pb-[2rem] overflow-hidden max-tablet:hidden' ><p style={{"--delay-anim":"0.3s"}} className={`text-white text-justify opacity-0 select-none ${disappearAnimate} ${appearAnimate}`}>{topics[currentTopic].descripcion}</p> </div>
        
      </div>
    </div>
  )
}

export default Background;

// @layer utilities {
//   @media (min-aspect-ratio: 16/9) {
//     .hide-wide {
//       display: none !important;
//     }
//   }
// } quiero adaptar esto al div que tiene ref={refInfo}  <div ref={refInfo}  className={`flex flex-col justify-center items-center w-[34.4rem] max-w-[37.5rem] max-sm:w-[25rem] h-[17.5rem] max-tablet:h-40 max-xs:h-24 max-sm:h-28 max-md:h-36
//        absolute top-[34%] max-xl:top-96 max-tablet:top-24 max-md:left-6 max-sm:top-32 max-sm:left-12 max-xs:top-28 left-2 right-0 p-2 rounded-lg text-center space-y-[-2rem] ${appearAnimate ? "bg-black/25" : "bg-black/0"}`}>
//         <div className="pb-[6rem] overflow-hidden" >  <strong style={{"--delay-anim":"0.1s"}} className= {`text-white opacity-0 text-7xl max-md:text-6xl max-sm:text-4xl select-none ${disappearAnimate} ${appearAnimate}`}>{topics[currentTopic].titulo}</strong></div>
//         <div className='pb-[4rem]  overflow-hidden max-tablet:hidden' ><span style={{"--delay-anim":"0.2s"}} className={`text-white text-3xl opacity-0 select-none ${disappearAnimate} ${appearAnimate}`}>{topics[currentTopic].subtitulo}</span></div>
//         <div className='pb-[2rem] overflow-hidden max-tablet:hidden' ><p style={{"--delay-anim":"0.3s"}} className={`text-white text-justify opacity-0 select-none ${disappearAnimate} ${appearAnimate}`}>{topics[currentTopic].descripcion}</p> </div>
        
//       </div>

// /* para resetear los estilos  */
// @tailwind base;
// /*  para utilizar los componentes */
// @tailwind components;
// /* para utilizar las clases de tailwind  */
// @tailwind utilities;

// :root{
//   width:100vw;
// }

// @layer base {
//   html {
//     font-size: 16px;
//   }
//   :root {
//       --longitud: calc(40% + 0.5rem);
//     }

//   @media (max-width: 1400px) {
//     html {
//       font-size: 14px;
//     }
    
//   }
//   @media (max-width: 1220px) {
//     html {
//       font-size: 13px;
//     }
//     :root {
//       --longitud: calc(35% + 0.5rem);
//     }
//   }
//   @media (max-width: 780px) {
//     html {
//       font-size: 12px;
//     }
//   }

//   @media (max-width:430px){
//     :root {
//       --longitud: calc(30% + 0.5rem);
//     }
//   }
//    @media (max-width: 344px) {
//     html {
//       font-size: 11px;
//     }
//      :root {
//       --longitud: calc(25% + 0.5rem);
//     }
//   }
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         xs: "345px",
//         sm:"430px",
//         md:"780px",
//         tablet:"1220px",
//         xl:"1400px"
//       },
//       animation: {
//         downgrade: "downgrade 1s ease-in-out",
//         upgrade: "downgrade 1s ease-in-out reverse",
//         downGrowCard: "downGrowCard 1s ease-in-out",
//         upGrowCard: "upGrowCard 1s ease-in-out",
//         infoAppear: "infoAppear 1s forwards var(--delay-anim)",
//         infoDisappear: "infoDisappear 1s",
//         movement:"movement 6s linear infinite"
//       },
//       keyframes: {
//         downgrade: {
//           from: {
//             opacity: 1,
//             transform: "scale(1)",
//           },
//           to: {
//             opacity: 0,
//             transform: "scale(1.3)",
//           },
//         },
//         downGrowCard: {
//           "0%": {
//             width: "10rem",
//             height: "auto",
//             left: "41.5%",
//           },
//           "50%": {
//             width: "100vw",
//             height: "100vh",
//             left: "0",
//           },
//           "100%": {
//             width: "100vw",
//             height: "100vh",
//             left: "0",
//           },
//         },
//         upGrowCard: {
//           "0%": {
//             width: "100vw",
//             height: "100vh",
//             left: "0",
//           },
//           "50%": {
//             width: "10rem",
//             height: "auto",
//             left: "41.5%",
//           },
//           "100%": {
//             width: "10rem",
//             height: "auto",
//             left: "41.5%",
//           },
//         },
//         infoAppear: {
//           "0%": {
//             transform: "translateY(100%)",
//             opacity: "0",
//             display: "none",
//           },
//           "100%": {
//             transform: "translateY(0%)",
//             opacity: "1",
//             display: "flex",
//           },
//         },
//         infoDisappear: {
//           "0%": {
//             transform: "translateY(0%)",
//             display: "none",
//              opacity: "1",
//           },
//           "100%": {
//             transform: "translateY(100%)",
//              opacity: "0",
//              display: "flex",
//           },
//         },
//         movement:{
//          "0%":{
//           transform: "translateX(0%)",
//          },
//          "100%":{
//           transform: "translateX(-400%)",
//          }
//         },
//       },
//     },
//   },
//   plugins: [],
// };




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base:"/React-Landing/"
// })

// quiero colocar un media query con  min-aspect-ratio donde al div que tiene ref={refInfo} quede oculto puede ser con display none, ya que estoy usando tailwind como lo haria?