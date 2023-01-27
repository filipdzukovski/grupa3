import React from 'react';
import {Link} from 'react-router-dom';

export function NotFound(){
    return(
        <div>
            <h1>Error 404 !!! Route Not Found</h1>
            <p>Sorry nothing to see here</p> <Link to="/home">Go Back</Link>
        </div>
    )
}