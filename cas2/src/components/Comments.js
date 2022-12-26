import React from 'react';

export const Comments = (props) => {
    console.log(props)
    return(
        <div id='comments'>         
            {/* !T */}              {/* T */}
           {props.hasComments && <p>Comments</p> }
           {props.multipleComments === true ? <p>This Component has Multiple Comments</p> 
           : <h2>The Comments You're looking for are not here</h2> }
        </div>
    )
}

// && - Logicko i - dava tocno samo dokolku dvata izrazi se tocni
// ? - ternaren operator 
//if(uslov){//napravi nesto ako e tocen uslovot}
//else{//napravi nesto drugo dokolku uslovot e netocen}
// uslov ? napravi nesto ako e tocen : napravi drugo ako e netocen