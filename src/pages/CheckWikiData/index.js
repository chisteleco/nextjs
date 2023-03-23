
import { useState, useEffect, useRef} from 'react';

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
  <div>
     <label>
      Name:
      <input type="text" name="name" onChange={e=>setName(e.target.value)}/>
    </label>
    <button onClick={e=>{handleSubmit(e)}}> OK</button>

  <>
  <h3>nombre:{names}</h3>
  <h3>muerto:{dead.toString()}</h3>
  <>
     {
      dead &&
      <>
        <h3>muerto en :{died}</h3>
        
      </>
    }
    <h3>puntos :{points}</h3>
    </>

  </>
  </div>
  
  );
}

