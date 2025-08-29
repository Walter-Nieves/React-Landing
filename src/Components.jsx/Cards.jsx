import { useTopic } from "../Contests/TopicContext.jsx";

const Card = ({ topic }) => {
  return (
    <li
      className="hover:scale-105 duration-500 transition-transform rounded-xl overflow-hidden shadow-xl"
      style={{
        backgroundImage: `url(${topic.imagen})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className=" bg-gradient-to-b from transparent to to-black text-white  rounded-md w-60 aspect-[3/4] flex flex-col-reverse text-center justify-between p-2">
        <span className="font-bold select-none">{topic.titulo}</span>
      </div>
    </li>
  );
};

function Cards() {
  const { topics, estilo } = useTopic();

  return (
    //div principal
    <div className="pl-2 left-[40%] max-tablet:left-[35%] max-sm:left-[30%] max-xs:left-[25%] overflow-hidden flex fixed z-20  top-0  w-screen h-screen items-center"> 
      {/* //lista */}
      <ul
        className="flex space-x-16 relative"
        style={{
          //corresponde al ancho de la tarjeta (w-60) mas el espacio de gap(space-x-16) = 19rem
          transform: `translateX(${(estilo.suave-1) * 19}rem)`,

          left: `${estilo.abrupto * -19}rem`,
          transition: "transform 1s ",
        }}
      >
        {topics.map((topic, index) => {
          return <Card topic={topic} key={index} />;
        })}
        {topics.map((topic, index) => {
          if (index < 4) return <Card topic={topic} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default Cards;
