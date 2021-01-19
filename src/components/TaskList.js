import React from "react"
import Input from "./Input"
import Task from "./Task"


const TaskList=({ListOfItems})=>{
    console.log(ListOfItems,"list of items")
    console.log(ListOfItems.length,"length")
    if(ListOfItems.length==0){
        return(<div style={{display:"flex",justifyContent:"center",padding:"20px"}}><h1 style={{color:"red",fontSize:"40px",fontWeight:"bold",marginTop:"20px"}}>PLZ ADD SOME TASK </h1></div>)
    }
return(
<>

<div style={{display:"flex",justifyContent:"center",color:"blue",fontWeight:"bold",
fontSize:"80px"}}><h1 style={{fontSize:"50px"}}>TASK LISTS</h1></div>
<div>

{ListOfItems.map((val)=>{
    return(<Task key={val.id} id={val.id}  task={val.task}></Task>)})}
</div>

</>)

}

export default TaskList