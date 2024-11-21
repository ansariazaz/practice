import React, { useContext } from 'react'
import { myContext } from '../../contextApi';

const About = () => {
    const{count, setCount} = useContext(myContext);
  return (
    <div>
         <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>count</button>
    </div>
  )
}

export default About