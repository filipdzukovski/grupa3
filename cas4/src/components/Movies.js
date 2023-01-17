import React from 'react';
import PropTypes from 'prop-types';

export const Movies = ({filmovi}) => {
console.log(filmovi)
    return(
        <div id="movies">
          {filmovi.map((film,i)=>{
            return(
                <div key={i}>
                    <h4><span>Title: </span>{film.name}</h4>
                    <p><span>Date: </span>{film.date}</p>
                    <p><span>Genre: </span>{film.genre}</p>
                    <p><span>Plot: </span>{film.plot}</p>
                    <a href={film.imdbLink} target="_blank" rel="noreferrer">Link To IMDb</a>
                    <br/>
                    <img width={250} height={400} src={film.imgUrl} alt={film.name}/>
                </div>
            ) 

          })

          }
        </div>
    )
}

Movies.propTypes = {
    filmovi: PropTypes.arrayOf(PropTypes.object).isRequired
}