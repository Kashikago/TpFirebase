import React, { useState } from 'react';
import { Navigate,Link } from 'react-router-dom';
import "../FormStyle.css";
import {createUser} from '../../Service/AuthFirebaseService'

function Signup() {
    const [email, SetEmail] = useState("");
    const [password, SetPassord] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const [errorMessage,SetErrorMessage] = useState("");
    return (<>
        <div className='formZone'>
            <h1>Signup</h1>
            {errorMessage != "" && <h2>{errorMessage}</h2>}
            <form>

                <input type="text" placeholder='Email' onChange={e => getText(e, SetEmail)}></input>
                <input type="password" placeholder='password' onChange={e => getText(e, SetPassord)}></input>
                <input type="password" placeholder='Confirm password' onChange={e => getText(e, SetConfirmPassword)}></input>
                <Link to="/signin"> Already a user ? Signup</Link>
            </form>
            <button onClick={e => createUser(email, password, confirmPassword,SetErrorMessage)}>Signup</button>
        </div>
    </>)
}


function getText(e, stateCallback) {
    stateCallback(e.target.value);
}
export default Signup;