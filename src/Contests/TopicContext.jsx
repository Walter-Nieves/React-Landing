import { createContext, useContext, useState } from "react";
import datos from "../data/info.js";
import { useReducer } from "react";

const TopicContext = createContext();

const topics = datos.destinos;

function TopicProvider({ children }) {
  const [currentTopic, setCurrentTopic] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [backgroundAnimate, setBackgroundAnimate] = useState("");
  const [growCardAnimate, setGrowCardAnimate] = useState();
  const [appearAnimate, setAppearAnimate] = useState("animate-infoAppear");
  const [disappearAnimate,setDisappearAnimate] = useState("");
  // const [change, setChange] = useState(false);

  const estiloInicial = {
    suave: 0,
    abrupto: 0,
  };

  const funcionMover = (estiloActual, moverHacia) => {
    let { suave, abrupto } = estiloActual;

    if (moverHacia == "izquierda") {
      if (suave % topics.length == 0 || suave == 0) {
        abrupto = suave + topics.length;
      }
      suave++;
    }

    if (moverHacia == "derecha") {
      if (suave % topics.length == 0) {
        abrupto = suave;
      }

      suave--;
    }

    const nuevoEstilo = { suave, abrupto };

    return nuevoEstilo;
  };

  const [estilo, moverA] = useReducer(funcionMover, estiloInicial);

  const nextTopic = () => {
    // setChange(true);
    setBackgroundAnimate("animate-downgrade");
    setGrowCardAnimate("animate-downGrowCard");
  
    setTimeout(() => {
      setAppearAnimate("animate-infoAppear");
    }, 1200);
    setDisableButton(true);
 


    setTimeout(() => {
      if (currentTopic >= topics.length - 1) {
        setCurrentTopic(0);
      } else {
        setCurrentTopic(currentTopic + 1);
      }

      setBackgroundAnimate("");
      setGrowCardAnimate("");
      setAppearAnimate("");
      setDisableButton(false);
      // setChange(false);
    }, 1000);
    
  };

  const prevTopic = () => {

    setBackgroundAnimate("animate-upgrade");
    setGrowCardAnimate("animate-upGrowCard");
    
    setDisappearAnimate("animate-infoDisappear");
    setDisableButton(true);


    
    // setTimeout(() => {
    // }, 1200);
    
    if (currentTopic == 0) {
      setCurrentTopic(topics.length - 1);
    } else {
      setCurrentTopic(currentTopic - 1);
    }
    setTimeout(() => {
      setBackgroundAnimate("");
      setGrowCardAnimate("");
      setDisappearAnimate("");
      setDisableButton(false);
    }, 1000);
  };

  // useEffect(() => {

  //     if (change) {
  //       setAppearAnimate("animate-infoAppear");
  
  //       const timeout = setTimeout(() => {
  //       setChange(false);
  //     }, 100);
  
  //     return () => clearTimeout(timeout);
    
  //     }

  // }, [change]);


  return (
    <TopicContext.Provider
      value={{
        topics,
        currentTopic,
        nextTopic,
        prevTopic,
        backgroundAnimate,
        estilo,
        growCardAnimate,
        appearAnimate,
        disappearAnimate
        // setChange
      }}
    >
      {/* div para los botones */}
      <div className=" flex w-full justify-center bottom-10 fixed z-50 space-x-10">
        <button
          disabled={disableButton}
          className="ring-2 ring-white rounded-full size-10 flex justify-center items-center"
          type="button"
          onClick={() => {
            prevTopic();
            moverA("izquierda");
          }}
        >
          <img
            className="size-6 hover:size-7 transition-[1s]  hover:invert"
            src="/React-Landing/public/icons/caret-left-fill.svg"
            alt="left arrow"
          />
        </button>
        <button
          disabled={disableButton}
          className=" ring-2 ring-white rounded-full size-10 flex justify-center items-center"
          type="button"
          onClick={() => {
            nextTopic();
            moverA("derecha");
          }}
        >
          <img
            className="size-6 hover:size-7 transition-[1s]  hover:invert"
            src="/React-Landing/public/icons/caret-right-fill.svg "
            alt="right arrow"
          />
        </button>
      </div>
      {children}
    </TopicContext.Provider>
  );
}

export function useTopic() {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error("Para usar useTopic, debe estar dentro de TopicProvider");
  }
  return context;
}

export default TopicProvider;
