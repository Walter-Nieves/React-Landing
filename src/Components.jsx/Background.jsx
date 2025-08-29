
import { useTopic } from '../Contests/TopicContext.jsx'
// import datos from '../data/info.js';


function Background() {

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
      <div className={`flex flex-col justify-center items-center w-[34.4rem] max-w-[37.5rem] max-sm:w-[25rem] h-[17.5rem] max-tablet:h-40 max-xs:h-24 max-sm:h-28 max-md:h-36
       absolute top-[34%] max-xl:top-96 max-tablet:top-24 max-md:left-6 max-sm:top-32 max-sm:left-12 max-xs:top-28 left-2 right-0 p-2 rounded-lg text-center space-y-[-2rem] ${appearAnimate ? "bg-black/25" : "bg-black/0"}`}>
        <div className="pb-[6rem] overflow-hidden" >  <strong style={{"--delay-anim":"0.1s"}} className= {`text-white opacity-0 text-7xl max-md:text-6xl max-sm:text-4xl select-none ${disappearAnimate} ${appearAnimate}`}>{topics[currentTopic].titulo}</strong></div>
        <div className='pb-[4rem]  overflow-hidden max-tablet:hidden' ><span style={{"--delay-anim":"0.2s"}} className={`text-white text-3xl opacity-0 select-none ${disappearAnimate} ${appearAnimate}`}>{topics[currentTopic].subtitulo}</span></div>
        <div className='pb-[2rem] overflow-hidden max-tablet:hidden' ><p style={{"--delay-anim":"0.3s"}} className={`text-white text-justify opacity-0 select-none ${disappearAnimate} ${appearAnimate}`}>{topics[currentTopic].descripcion}</p> </div>
        
      </div>
    </div>
  )
}

export default Background;