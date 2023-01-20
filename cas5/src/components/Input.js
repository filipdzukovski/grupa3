import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({tip,ime,pisiNesto,vrednost,pratiMiIzmeni,smeniTipNaPole}) => {
    return(
        <p>
         <input
            type={tip}
            name={ime}
            placeholder={pisiNesto}
            value={vrednost}
            onChange={pratiMiIzmeni}
         />   
        {ime === "password" ? <button onClick={smeniTipNaPole} type='button' className='eye-button'>
            <i className={tip === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
        </button> : null}
        </p>
    )
}

Input.propTypes = {
    tip: PropTypes.string.isRequired,
    ime: PropTypes.string,
    pisiNesto: PropTypes.string,
    vrednost: PropTypes.string.isRequired,
    pratiMiIzmeni: PropTypes.func.isRequired,
    smeniTipNaPole:PropTypes.func
}