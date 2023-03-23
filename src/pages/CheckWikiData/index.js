
import { useState, useEffect, useRef} from 'react';
import "../../app/tailwindWrapperCSS.css"
export default function Home(){

 
  const [names,setName]=useState("name");
  const [dead,setDead]=useState(false);
  const [died,setDied]=useState("");
  const [born,setBorn]=useState("");
  const [points,setPoints]=useState(0);




  async function fetchData(name){
    const result= await fetch("/api/wikipedia/"+name)
    const resultado=await result.json();
    console.log(`El resultado es ${resultado.dead}`);
    setDead(resultado.dead);
    setDied(resultado.died)
    setBorn(resultado.born)
    if(resultado.dead===false)
    {
      console.log("Puntitos!!")
      setPoints(110-(2023-parseInt(resultado.born)))
    }
    else
    {
      setPoints(0)
    }

 
  }
  useEffect(() => {
    console.log(`Nombre: ${names} Muerto: ${dead}`)
   fetchData(names);
  }, [dead]);

  function handleSubmit(e){
    e.preventDefault();
    console.log(`nombre obtenido:${names}`)
    fetchData(names); 
  }


 

   return (
  <div className="grid h-screen place-items-center h-32 t-16">
     <label className='font-bold'>
      Name:
      <input type="text" name="name" onChange={e=>setName(e.target.value)}/>
    </label>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={e=>{handleSubmit(e)}}> OK</button>

  <>
  
  <h3 className="font-bold">muerto:{dead.toString()}</h3>
  <>
     {
      dead &&
      <>
        <h3 className="text-3xl font-bold ">muerto en :{died}</h3>
        
      </>
    }
    <h3 className="text-3xl font-bold ">puntos :{points}</h3>
    </>

  </>
  </div>
  
  );
}

