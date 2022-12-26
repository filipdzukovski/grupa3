import React from 'react';

export const FruitList = (props) => {
    console.log(props)
    return (
        <div id="fruit-list">
            <ul>
                {/* {props.listaNaOvosje.map((ovosje,i)=>{
                // i = 0 ovosje = banana
                // i = 1 ovosje = mango
                // i = 2 ovosje = orange
                return(
                    <li key={i}>{ovosje}</li>
                )
            })} */}

                {props.listaNaOvosje.map((ovosje, i) => (
                    // i = 0 ovosje = banana
                    // i = 1 ovosje = mango
                    // i = 2 ovosje = orange
                    <li key={i}>{ovosje}</li>
                ))}
            </ul>
        </div>
    )
}

// ()=>{} - anonimna funkcija
// za poednostavna verzija na map() anonimna f-ja izgleda vaka ()=>() i nema return vo nea