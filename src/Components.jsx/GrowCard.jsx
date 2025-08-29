import { useEffect, useState } from "react";
import { useTopic } from "../Contests/TopicContext";

function GrowCard() {
  const { topics, currentCardTopic,growCardAnimate } = useTopic();

  const [posicion,setPosicion] = useState(currentCardTopic)

  useEffect(()=>{
    setPosicion(currentCardTopic)
    // if(currentCardTopic < topics.length ){
    // }else{
    //   setPosicion(0)
    // }
  },[currentCardTopic, topics.length]);

  return (
    <div className="z-10 fixed w-screen h-screen left-0 top-0  flex items-center">
      <div 
        style={{
          // "--delay-anim2":"0.5s",
          backgroundImage: `url(${topics[posicion].imagen}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          // left:"calc(40% + 0.5rem)"
          left:"var(--longitud)"
        }} className={`pl-2 w-60 aspect-[3/4]  overflow-hidden absolute rounded-xl
         transition-all duration-500 ease-in-out   ${growCardAnimate} `}

        // className="pl-2 w-60 aspect-[3/4] rounded-md overflow-hidden absolute left-[41.5%] "
        


      >
        <div className="size-full bg-gradient-to-b from transparent to to-black text-white flex flex-col-reverse text-center justify-between p-2">
          <span className="font-bold select-none">
            {/* {topics[posicion].titulo} */}
          </span>
        </div>{" "}
      </div>
    </div>
  );
}

export default GrowCard;
