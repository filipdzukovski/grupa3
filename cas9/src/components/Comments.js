import React, { useState, useEffect } from 'react';
import { API_URL } from '../utils/constants';
import {Link} from 'react-router-dom';

export const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/comments`)
            .then(res => res.json())
            .then(jsonValues => setComments(jsonValues))
            .catch(err => alert(err))
    }, [])

    return (
        <div id="comments">
            {comments.length > 0 ? 
            <div>
                {comments.map(comment=>{
                    return(
                        <div key={comment.id}>
                            <span>Id:{comment.id}</span>
                            <p>Name: {comment.name}</p>
                            <Link to={"/single-comment/" + comment.id}>Details...</Link>
                            <hr/>
                        </div>
                    )
                })}
             </div> 
            : <h2>Loading Comments</h2>}
        </div>
    )
}