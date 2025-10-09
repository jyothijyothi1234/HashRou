import React, { useEffect, useState } from "react";



function ApiiInter(){

const[data,setData]=useState([])
const[input,setInput]=useState("")
const[store,setStore]=useState([])
useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((json)=>setData(json))
},[])


const Handle=(e)=>{

    setInput(e.target.value)
}

const Oncliking=()=>{

    setStore(data.filter((item)=>item.body.includes(input)))
}
    return(


        <div>
            <input   placeholder="enter the data"   onChange={Handle}/>
            <button  onClick={Oncliking}> on click </button>
            <h1> Api Integration </h1>
            {
                store.length>0?store.map((item)=><h1>{item.body}</h1>):data.map((item)=><h1>{item.body}</h1>)
            }


            </div>
    )
}


export default ApiiInter;