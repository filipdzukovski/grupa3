import React,{useState,useEffect} from 'react';

export const Users = () => {

    const [userList,setUserList] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(result => result.json())
        .then(json => setUserList(json))
        .catch(err => console.error(err))
    },[])
        
    

    return (
        <div id="users">
            {userList.length > 0 ? <table border = '1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <h2>Loading Users Please wait...</h2>
            
            }
            
        </div>
    )

}