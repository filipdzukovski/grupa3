import React from 'react';

export const Training = ({ listOfThings,deleteItem,editItem }) => {

    return (
        <div id="training">
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfThings.map((elem, i) => {
                        return (
                            <tr key={elem.id}>
                                <td>{elem.id}</td>
                                <td>{elem.name}</td>
                                <td>{elem.lastName}</td>
                                <td>{elem.year}</td>
                                <td><button onClick={()=>{deleteItem(elem.id)}}>Delete</button>
                                <button onClick={()=>{editItem(elem)}}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}