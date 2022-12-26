import React from 'react';
                            //props
export const Example = ({name,lastName,age}) => {

    return(
        <div id="example">
            <p>Hi my name is {name} {lastName} I'm {age} yrs old</p>
        </div>
    )
}