import React from 'react';
import PropTypes from 'prop-types';

export const Users = ({ korisnik1, korisnik2, prikaziKorisnik,property1 }) => {

    return (
        <div id='users'>
            {prikaziKorisnik === true ?
                // <div>
                <>
                    <p>Ime: {korisnik1.ime} </p>
                    <p>Adresa: {korisnik1.adresa} </p>
                    <p>Godini: {korisnik1.age} </p>
                </>
                // </div>      
                :
                <div>
                    <p>Ime: {korisnik2.ime} </p>
                    <p>Adresa: {korisnik2.adresa} </p>
                    <p>Godini: {korisnik2.age} </p>
                </div>
            }
        </div>
    )
}

Users.propTypes = {
    korisnik1: PropTypes.object.isRequired,
    korisnik2: PropTypes.object.isRequired,
    prikaziKorisnik: PropTypes.bool.isRequired,
}