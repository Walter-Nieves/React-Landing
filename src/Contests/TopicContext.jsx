import { createContext,useContext, useState } from "react"
import datos from "../data/info.js"

const TopicContext = createContext();

const topics = datos.destinos;


function TopicProvider({children}) {

    const [currentTopic,setCurrentTopic]= useState(0);
    const [disableButton,setDisableButton] = useState(false);
    const [backgroundAnimate,setBackgroundAnimate] = useState("");
    
   

    const nextTopic = ()=>{
        setDisableButton(true);
        setBackgroundAnimate("animate-downgrade");

        setTimeout(() => {
            if(currentTopic >= topics.length - 1){
                  setCurrentTopic(0);
            }else{
                setCurrentTopic(currentTopic + 1)
            }
            setTimeout(() => {
                setBackgroundAnimate("");
                 setDisableButton(false);
            }, 100);
        }, 900);
    }

    const prevTopic = ()=>{
           setDisableButton(true);
           setBackgroundAnimate("animate-upgrade");

        if(currentTopic == 0){
          setCurrentTopic(topics.length - 1)
        }else{
            setCurrentTopic(currentTopic - 1)
        }
        setTimeout(() => {
            setBackgroundAnimate("");
            setDisableButton(false);
        }, 1000);
    }

  return (
    <TopicContext.Provider value={{topics,currentTopic,nextTopic,prevTopic,backgroundAnimate}}>
         {/* div para los botones */}
      <div className='flex w-full justify-center bottom-10 fixed space-x-10'> 
        <button disabled={disableButton} className='ring-2 ring-white rounded-full size-10 flex justify-center items-center' type='button' onClick={prevTopic}>
          <img className='size-6 hover:size-7 transition-[1s]  hover:invert' src="/React-Landing/public/icons/caret-left-fill.svg" alt="left arrow" />
        </button>
        <button disabled={disableButton} className='ring-2 ring-white rounded-full size-10 flex justify-center items-center' type='button' onClick={nextTopic}>
          <img className='size-6 hover:size-7 transition-[1s]  hover:invert' src="/React-Landing/public/icons/caret-right-fill.svg " alt="right arrow" />
        </button>
      </div>
        {children}
    </TopicContext.Provider>
  );
}



export function useTopic(){
    const context = useContext(TopicContext);
    if(!context){ 
        throw new Error ("Para usar useTopic, debe estar dentro de TopicProvider");
    }
    return context;
}



export default TopicProvider;