
import { useTopic } from '../Contests/TopicContext.jsx'
// import datos from '../data/info.js';


function Background() {

  const {topics,currentTopic,backgroundAnimate} = useTopic();

  return (
    //div principal
    <div className= {`relative -z-20 w-screen h-screen flex justify-center ${backgroundAnimate}`}>
      {/* div para el fondo */} 
      <div className=' fixed flex -z-20 left-0 right-0 top-0 bottom-0 select-none'>
        <img className='w-full h-full object-cover select-none' src={topics[currentTopic].imagen} alt="Imagen"/>
        <div className='absolute flex w-full h-full bg-gradient-to-b from-black/5 via-transparent to-transparent'></div>
      </div> 
     
      {/* div de informacion */}
      <div className='flex flex-col justify-center items-center w-[550px] max-w[600px] h-70 bg-black/25
       absolute top-80 bottom-30 left-2 right-0 p-2 rounded-lg text-center space-y-4'>
        <strong className='text-white text-7xl select-none'>{topics[currentTopic].titulo}</strong>
        <span className='text-white text-3xl select-none'>{topics[currentTopic].subtitulo}</span>
        <p className='text-white text-justify select-none'>{topics[currentTopic].descripcion}</p>
        
      </div>
    </div>
  )
}

export default Background;