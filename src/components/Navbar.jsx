import React, { useContext } from 'react'

import { AuthContext } from './AuthContext'
import MyButton from './form/MyButton';

const Navbar = () => {
    const { logOut, authenticated } = useContext(AuthContext);

    return ( 
        <nav>
            <h2>Patent Search</h2>

            { authenticated && <MyButton label='Logout' onClick={logOut} /> }
        </nav>
    );
}

export default Navbar;

