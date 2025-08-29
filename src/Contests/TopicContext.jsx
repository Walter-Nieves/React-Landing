import { createContext, useContext, useState } from "react";
import datos from "../data/info.jsx";
import { useReducer } from "react";

const TopicContext = createContext();

const topics = datos.destinos;

function TopicProvider({ children }) {
  const [currentTopic, setCurrentTopic] = useState(0);
  const [currentCardTopic, setCurrentCardTopic] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [backgroundAnimate, setBackgroundAnimate] = useState("");
  const [growCardAnimate, setGrowCardAnimate] = useState();
  const [appearAnimate, setAppearAnimate] = useState("animate-infoAppear");
  const [disappearAnimate,setDisappearAnimate] = useState("");
  

  //reducer para estilos
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


  //funciones para moverse
  const nextTopic = () => {
   
    setGrowCardAnimate("animate-downGrowCard");
    setBackgroundAnimate("animate-downgrade");
    setTimeout(() => {
      setAppearAnimate("animate-infoAppear");
      
    }, 1100);
    setDisableButton(true);
 
      if (currentCardTopic >= topics.length - 1) {
        setCurrentCardTopic(0)
      } else {
        setCurrentCardTopic(currentCardTopic + 1)
      }

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
     
    }, 1000);
    
  };

  const prevTopic = () => {

    setDisableButton(true);

    setGrowCardAnimate("animate-upGrowCard"); 
    setBackgroundAnimate("animate-upgrade");

    setDisappearAnimate("animate-infoDisappear");
    
    if (currentTopic == 0) {
      setCurrentTopic(topics.length - 1);
    } else {
      setCurrentTopic(currentTopic - 1);
    }
    setTimeout(() => {

      if (currentCardTopic == 0) {
      setCurrentCardTopic(topics.length - 1);
    } else {
      setCurrentCardTopic(currentCardTopic - 1);
    }

      setDisableButton(false);
      setDisappearAnimate("");
      setGrowCardAnimate("");
      setBackgroundAnimate("");
    }, 1000);
  };


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
        disappearAnimate,
        currentCardTopic,
        disableButton,
        moverA,
      }}
    >
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
