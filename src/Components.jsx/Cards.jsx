
import { useTopic } from "../Contests/TopicContext.jsx"

const Card =({topic}) =>{
    return(
        <li className="bg-yellow-500   hover:scale-105 transition-transform rounded-xl overflow-hidden shadow-xl "
         style={{backgroundImage: `url(${topic.imagen})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className="bg-gradient-to-b from transparent to to-black text-white  rounded-md w-80 aspect-square flex flex-col-reverse text-center justify-between p-2">
               <span className="font-bold">{topic.titulo}</span> 
            </div>
        </li>
    )
}

function Cards() {

    const {topics,currentTopic} = useTopic();
    //div principal
  return (
    <div className="bg-red-500 flex fixed -z-10 top-0 left-0 w-screen h-screen items-center">
     {/* // contendor animable */}
     <div className="bg-blue-500 p-8">
        <img src={topics[currentTopic].imagen}alt="Imagenes" />
     </div>
     {/* //lista */}
     <ul className="bg-green-500 flex space-x-8">
        {topics.map((topic,index)=>{
            return(
                <Card topic={topic} key={index}/>
            )

        })}
     </ul>
    
    
    
    
    
    </div>
   
    

  )
}

export default Cards