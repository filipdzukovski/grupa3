import React, { useState, useEffect } from 'react';
import { Todos } from './Todos';

export function App() {

  const [car, setCar] = useState({ model: 'BMW', year: 2020 });
  const [days, setDays] = useState([
    "Monday", "Tuesday", "Wednesday"
  ]);
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Eat Supper', done: false },
    { id: 3, text: 'Go to Sleep', done: false }
  ]);
  const [newTodo, setNewTodo] = useState("");


  function newCar() {
    setCar({
      ...car,
      year: 2022
    })
  }

  function addDays() {
    setDays(
      ["Sunday", ...days, "Thursday"]
    )
  }

  function addElementToArray() {
    let newObject = {
      id: todos.length + 1,
      text: newTodo,
      done: false
    }

    setTodos([
      ...todos, newObject
    ]);
    setNewTodo("");
  }

  function markTodoAsDone(todo){
    console.log(todo); // todo.id = 3 go sodrzi kliknatiot element (todo.id todo.text todo.done)
    setTodos([
      ...todos.map(item=> item.id === todo.id ? // go barame kliknatiot element 1===2 X 2===2 V 3===2 X
      {id:item.id,text:item.text,done: !item.done} // if => koga go nashol kliknatiot element (t.e. go menuvame odnosno negirame done property-to)
      : item) // vrati go orginalniot element bez promeni (vazi za site elementi osven kliknatiot)
    ])

  }

  useEffect(() => {
    console.log("Person: ", person)
  }, [person])

  return (
    <div id="app">
      <input
        type="text"
        placeholder='Enter First Name'
        value={person.firstName}
        onChange={(e) => { setPerson({ ...person, firstName: e.target.value }) }}
      />

      <input
        type="text"
        placeholder='Enter Last Name'
        value={person.lastName}
        onChange={(e) => { setPerson({ ...person, lastName: e.target.value }) }}
      />

      <hr />
      <h2>Car</h2>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <button onClick={newCar}>Buy New Car</button>
      <hr />
      <ul>
        {days.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>
      <button onClick={addDays}>Add Days</button>
      <hr />
      <input
        type="text"
        placeholder='Enter new Todo'
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value) }}
      />
      <button onClick={addElementToArray}>Add TODO</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone}/>
    </div>
  )
}