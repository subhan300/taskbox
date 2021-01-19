import React,{useState} from 'react'

function Task({id,task}) {
    const[display,hide]=useState(false)
    return (
<div key={id} style={{display:"flex",justifyContent:"space-around",marginTop:"20px",
padding:"50px"}}>

    
<input type="checkbox" onClick={()=>hide(true)} disabled={display}></input>

    {display?<h1 style={{textDecoration:"line-through",color:"red",fontSize:"70px"}}>{task}</h1>:
    <h1 style={{fontSize:"30px",color:"green"}}>{task}</h1>}
<input type="checkbox" placeholder="archieve task" onClick={()=>hide(false) 
}  disabled={display==false}></input></div>
    )
}

export default Task