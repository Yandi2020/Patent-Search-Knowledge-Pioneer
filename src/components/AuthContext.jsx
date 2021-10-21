import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [authenticated, setAuthenticated] = useState(false); 

    const [users, setUsers] = useState([
        { username: 'test', password: 'test', uid: 1234 }
    ])

    const logIn = (cred) => {
        const loggedUser = users.find(user => user.username === cred.username && user.password === cred.password); 
        if(loggedUser) setAuthenticated(true)
    }

    const logOut = () => setAuthenticated(false);

    return (
        <AuthContext.Provider value={ { authenticated, logIn, logOut } } >
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

