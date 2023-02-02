import React,{useState} from 'react';
import {Training} from './components/Training';

export function App(){

  const [listOfThings,setListOfThings] = useState([
    {id:1,name:"Pero",lastName:"Perovski",year:1996},
    {id:2,name:"Ivan",lastName:"Ivanovski",year:1997},
    {id:3,name:"Stefan",lastName:"Stefanovski",year:1998}
  ]);

  // const [person,setPerson] = useState({name:"",lastName:"",year:""});
  const [name,setName] = useState("");
  const [lastName,setLastName] = useState("");
  const [year,setYear] = useState("");
  const [selectedElement,setSelectedElement] = useState({});
  const [editing,setEditing] = useState(false);


  function deleteItem(id){ //parametarot na funkcijata go sodrzi id-to na elementot za brisenje (imeto e irelevantno kako sakate moze da go vikate)
    setListOfThings([
      ...listOfThings.filter(item=> item.id !== id)
    ]);
  }

  function editElement(elem){
    setEditing(true);
    setSelectedElement(elem)
  }

  function saveEdit(){
    setListOfThings([
      ...listOfThings.map(elem => selectedElement.id === elem.id ? {id:selectedElement.id,name:selectedElement.name,lastName:selectedElement.lastName,year:selectedElement.year} : elem)
    ])
    setSelectedElement({});
    setEditing(false);
  }

  function addElement(){
    const newElement = {
      id: Math.floor(Math.random()*100), //random id megju 0-100 
      name:name,
      lastName:lastName,
      year:year
    }
    setListOfThings([
      ...listOfThings,newElement
    ]);
    // setPerson({name:"",lastName:"",year:""});
    setName("");
    setLastName("");
    setYear("");
  }

  return(
    <div id="app">
        <h2>App</h2>
        <input
        type={"text"}
        placeholder={"Enter First Name"}
        value={selectedElement.name? selectedElement.name : name}
        onChange={selectedElement.name ? (e)=>{setSelectedElement({...selectedElement,name:e.target.value})} : (e)=>setName(e.target.value)}
        />
        <br/>
        <br/>
        <input
        type={"text"}
        placeholder={"Enter Last Name"}
        value={selectedElement.lastName ? selectedElement.lastName : lastName}
        onChange={selectedElement.lastName ? (e)=>{setSelectedElement({...selectedElement,lastName:e.target.value})} : (e)=>{setLastName(e.target.value)}}
        />
        <br/>
        <br/>

        <input
        type="number"
        placeholder={"Enter Year"}
        value={selectedElement.year?selectedElement.year : year}
        onChange={selectedElement.year ? (e)=>{setSelectedElement({...selectedElement,year:+e.target.value})} : (e)=>{setYear(+e.target.value)}}
        />
        <br/>
        <br/>

        <button onClick={editing ? saveEdit :  addElement}>{editing ? 'Save Edited Element' : 'Add New Element'}</button>
        {editing && <button onClick={()=>{setSelectedElement({});setEditing(false)}}>Cancel Editing</button>}
        <br/>
        <br/>

        <Training listOfThings={listOfThings} deleteItem={deleteItem} editItem = {editElement}/>
    </div>
  )
}