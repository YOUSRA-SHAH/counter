"use client"
import { useState } from "react"

function State(){
    const [count , setCount]  = useState(0)
return(
    <div>

<div className=" bg-pink-400 h-screen flex justify-center items-center">
  
   <h1 className="text-4xl font-serif text-start align-text-top border-separate"> My Counter</h1>
  <div className="bg-slate-500 p-10 shadow-lg shadow-slate-700 flex flex-col gap-10 items-center rounded-lg">
  <p> {count} </p>
  </div>
  <button onClick={() => setCount(count + 1) } className=" mix-blend-multiply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"> Start </button>
 
   <button onClick={() => setCount(0) } className=" mix-blend-multiply bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"> Reset </button>

</div>

   </div>
)



}
export default State