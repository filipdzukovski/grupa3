import React from 'react';
import {Outlet} from 'react-router-dom';

export function Contact() {

    return (
        <>
            <h1>Contact</h1>
            <Outlet/>
        </>
    )
}