import React, { useState, useEffect } from 'react';
import { Items } from './components/Items';

export function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [editing, setEditing] = useState(false); //boolean flag dali editirame
  const [editingItem, setEditingItem] = useState({}); // elementot sto ke se editira

  useEffect(() => {
    setCount([...items.filter(item => item.done)].length);
  }, [items])

  function addItem() {
    if (newItem.trim() === "") {
      alert("No Empty elements Allowed !!!");
      setNewItem('');
    }
    else {
      let itemObject = {
        id: Math.floor(Math.random() * 100), //items.length + 1
        text: newItem,
        done: false
      }
      setItems([...items, itemObject]); //dodavanje na element
      setNewItem(""); //reset na input field

    }
  }

  function markDone(item) {
    setItems([...items.map(elem => elem.id === item.id ?
      {
        id: elem.id,
        text: elem.text,
        done: !elem.done
      } :
      elem
    )])
  }

  function deleteItem(id) {
    setItems([...items.filter(item => item.id !== id)])
  }

  function editItem(item) {
    setEditingItem(item);
    setEditing(!editing);
  }

  function updateItem() {
    setItems([...items.map(item => item.id === editingItem.id
      ?
      {
        id: item.id,
        text: editingItem.text,
        done: item.done
      }
      :
      item
    )])
    setEditing(false);
  }

  return (
    <div id="app">
      <input
        type="text"
        placeholder='Enter New Item'
        value={newItem}
        onChange={(e) => { setNewItem(e.target.value) }}
      />
      <button onClick={addItem}>Add Item</button>
      <br />
      <br />
      {items.length > 0 && <p>Number of completed Items: {count}</p>}
      <Items
        listOfItems={items}
        markDone={markDone}
        deleteItem={deleteItem}
        editing={editing}
        setEditing={editItem} //zapis na elementot sto treba da se editira i bolean flag = true
        editingItem={editingItem}
        setEditingItem={(e) => { setEditingItem({ ...editingItem, text: e.target.value }) }} //vrednost na noviot element vo inputot
        cancel={() => { setEditing(false) }}
        save={updateItem}
      />
    </div>
  )
}