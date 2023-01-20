import React, { useState, useEffect } from 'react';

export const Domasna = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [showTable,setShowTable] = useState(true);

    useEffect(() => {
        console.log(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}\nAge: ${age}`)
    }, [firstName, lastName, email, password, age])

    return (
        <div>
            <input
                type="text"
                placeholder='Enter First Name'
                value={firstName}
                onChange={(event) => { setFirstName(event.target.value) }}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder='Enter Last Name'
                value={lastName}
                onChange={(event) => { setLastName(event.target.value) }}
            />
            <br />
            <br />
            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
            />
            <br />
            <br />
            <input
                type="password"
                placeholder='Enter Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <br />
            <input
                type="number"
                placeholder='Enter Number'
                min={0}
                value={age}
                onChange={(event) => { setAge(+event.target.value) }}
            />

            <br />
            <br />

            <button onClick={()=>{setShowTable(!showTable)}}>{showTable === true ? 'Hide Results' : 'Show Results'}</button>
            
            <br />
            <br />
            {showTable && <table border="1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{age}</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}