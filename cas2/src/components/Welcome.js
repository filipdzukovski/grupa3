import React from 'react';

export function Welcome(props){
   console.log(props)// {name:"Nesto"}
    return(
        <div>
            <h2>Hi {props.ime} {props.lastName} This is my welcome Component, I'm aged {props.age}</h2>
            <p>Something will happen here soon</p>
        </div>
    )
}