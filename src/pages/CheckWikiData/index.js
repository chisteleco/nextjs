
import { useState } from 'react';

export default function Home(){


  const handleSubmit= async (e) => {
    e.preventDefault();
    console.log(e);
    const result= await fetch("/api/wikipedia/"+e.target[0].value)
    console.log(result);
    setName(result.name);
    setDead(result.dead);
    
  }
  const [names,setName]=useState("");
  const [dead,setDead]=useState("");

   return (
  <div>
  <form onSubmit={e => { handleSubmit(e) }}>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form>

  <>
  <h3>nombre:{names}</h3>
  <h3>muerto:{dead}</h3>
  </>
  </div>
  
  );
}

