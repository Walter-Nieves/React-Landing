import { useEffect, useState } from "react";
import { useTopic } from "../Contests/TopicContext";

function GrowCard() {
  const { topics, currentTopic,growCardAnimate } = useTopic();

  const [posicion,setPosicion] = useState(currentTopic)

  useEffect(()=>{
    if(currentTopic < topics.length - 1 ){
      setPosicion(currentTopic + 1)
    }else{
      setPosicion(0)
    }

  },[currentTopic, topics.length]);

  return (
    <div className="z-20 fixed w-screen h-screen left-0 top-0  flex items-center">
      <div
        style={{
          backgroundImage: `url(${topics[posicion].imagen}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          left:"calc(40% + 0.5rem)"
        }}className={`pl-2 w-60 aspect-[3/4] rounded-md overflow-hidden absolute rounded-xl
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
