import React,{useState} from 'react'

function Input({itemList,setItemList}) {
    const[TaskValue,setTaskValue]=useState("")
    const[TaskId,setTaskId]=useState(1)

   const AddTask=()=>{
        setTaskId(TaskId + 1)
        const Obj_Of_Task={task:TaskValue,id:TaskId}
        setItemList([...itemList,{id:TaskId,task:TaskValue}])
        // console.log(itemList,"itemList of input")
        setTaskValue(" ")

    }
    return (
        <div>
            <input type="text" placeholder="ADD TASKS HERE"  style={{textAlign:"center"
            ,border:"2px solid yellow",height:"40px",width:"300px",color:"purple",fontSize:"30px"
        }}
       onChange={(e)=>setTaskValue(e.target.value)}  value={TaskValue}    ></input>
         <div style={{border:"0px",
         }}>   <button style={{backgroundColor:"violet",padding:"30px",marginTop:"20px",
        width:"200px",borderRadius:"50px 50px 50px 50px"}} onClick={AddTask}>ADD TASK</button></div>
        </div>
    )
}

export default Input
