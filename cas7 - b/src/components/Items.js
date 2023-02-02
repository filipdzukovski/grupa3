import React from 'react';

export const Items = ({listOfItems,markDone,deleteItem,editing,setEditing,editingItem,setEditingItem,cancel,save}) =>{
    return(
        listOfItems.length > 0 ? <table border = '1'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Item</th>
                    <th>Completed</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listOfItems.map(item=>{
                    return(
                        <tr key={item.id}>
                       {editing && item.id === editingItem.id ?
                       <>
                       <td>{item.id}</td>
                       <td><input value={editingItem.text} onChange={setEditingItem}/></td>
                       <td>
                           <input 
                           type={"checkbox"} 
                           value={item.done} 
                           checked={item.done} 
                           onChange={()=>{markDone(item)}}/>
                           </td>
                       <td><button onClick={save}>Save</button> <button onClick={cancel} >Cancel</button></td></>
                       : <><td>{item.id}</td>
                            <td>{item.text}</td>
                            <td>
                                <input 
                                type={"checkbox"} 
                                value={item.done} 
                                checked={item.done} 
                                onChange={()=>{markDone(item)}}/>
                                </td>
                            <td><button onClick={()=>setEditing(item)}>Edit</button>
                             <button onClick={()=>{deleteItem(item.id)}}>Delete</button></td>
                            </>}
                        </tr>
                    )
                })}
            </tbody>
        </table> : <p>No items added in the Array</p>
    )
}