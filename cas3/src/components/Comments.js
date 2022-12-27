import React from 'react';
import PropTypes from 'prop-types';

export const Comments = ({listaOdKomentari}) => {
    console.log(listaOdKomentari)
    return(
        <div id='comments' className='nekoja-klasa'>
            {listaOdKomentari.map((komentar,i)=>{
                // i = 0; komentar = {id:0,author:'Filip',content:'This is Comment 1'}
                // i = 1; komentar = {id:1,author:'Martin',content: 'Second Comment on the way'}
                // i = 2; komentar = {id:2,author:'Nikolina',content: 'Finally here'}
                return(
                    <div key={komentar.id}>
                        <h3 style={{color: komentar.author === 'Martin' ? 'red' : '' }}>Author: {komentar.author} </h3>
                        <p style={{backgroundColor: 'blue',color:'white'}}>Content: {komentar.content} </p>
                    </div>
                )
            })}
        </div>
    )
}

Comments.propTypes = {
    listaOdKomentari: PropTypes.arrayOf(PropTypes.object).isRequired
}