import React from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';


function NavBar(props) {
    return (
        <div className="d-flex justify-content-between nav-wrapper">
            <div>logo</div>
            <div className="d-flex justify-content-around">
            <SignIn/>
            <SignOut/>
            </div>
        </div>
    );
}

export default NavBar;