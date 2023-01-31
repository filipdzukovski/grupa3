import React from 'react';

export const Albums = ({listOfAlbums}) => {
    console.log(listOfAlbums)
    return(
        <div id="albums">
            {listOfAlbums.length > 0 ? 
            <div>
                {listOfAlbums.map(album=>{
                    return(
                        <div key={album.id}>
                            <p>ID: {album.id}</p>
                            <h3>Title: {album.title}</h3>
                            <hr/>
                        </div>
                    )
                })}
            </div> 
            : <h2>Loading Albums</h2> }
        </div>
    )
}