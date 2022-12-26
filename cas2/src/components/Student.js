import React from 'react';

export const Student = (props) => {
    console.log(props)
    return(
        <div id="student">
            <p>Br. Na Index: {props.student.index} </p>
            <p>Ime: {props.student.name} </p>
            <p>Fakultet: {props.student.college}</p>
        </div>
    )
}