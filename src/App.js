import React,{useState,useEffect} from "react"
import Input from "./components/Input"
import ItemList from "./components/TaskList"
function App() {
  const[itemList,setItemList]=useState([])
  
  return (
    <div className="App">
     <Input itemList={itemList}  setItemList={setItemList} />

     <ItemList ListOfItems={itemList}></ItemList>
    </div>
  );
}

export default App;
