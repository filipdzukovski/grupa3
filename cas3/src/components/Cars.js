import React from 'react';
import PropTypes from 'prop-types';

export const Cars = ({ listaNaVozila }) => {
    console.log(listaNaVozila)
    return (
        <div id='cars'>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Naseleno Mesto</th>
                        <th>Ulica</th>
                        <th>Oznaka</th>
                    </tr>
                </thead>
                <tbody>
                    {listaNaVozila.map((vozilo,i)=>{
                        return(
                            <tr key={i}>
                                <td>{vozilo.brand}</td>
                                <td>{vozilo.model}</td>
                                <td>{vozilo.year}</td>
                                <td>{vozilo.plates.grad.naselenoMesto}</td>
                                <td>{vozilo.plates.grad.ulica}</td>
                                <td>{vozilo.plates.oznaka}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

Cars.propTypes = {
    listaNaVozila: PropTypes.arrayOf(PropTypes.object).isRequired
}