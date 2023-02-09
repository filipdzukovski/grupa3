import React from 'react';
import PropTypes from 'prop-types';

export const UsersComponent = ({usersList,errorMessage}) => {
    console.log("UsersLIST:",usersList)
    console.log("ErrorMessage:",errorMessage)
    return(
        <div id="users-component">
            Users Component
        </div>
    )
}

UsersComponent.propTypes = {
    usersList:PropTypes.arrayOf(PropTypes.object).isRequired,
    errorMessage: PropTypes.string
}
