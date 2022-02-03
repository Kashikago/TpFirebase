import React, { useState, useEffect } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { connect } from '../../Service/AuthFirebaseService'
import "../FormStyle.css";
import { useDispatch } from 'react-redux';
import { login } from '../../Store/Signin/userSlice';
function Signin() {
    const [email, SetEmail] = useState("");
    const [password, SetPassord] = useState("");
    const [errorMessage, SetErrorMessage] = useState("");
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const [connecting, SetConnecting] = useState(false);
    console.log(connecting);
    useEffect(() => {
        if (connecting) {
            connect(email, password).then(() => {
                navigate('/Connected', { replace: true })
                console.log("Nav to connected");
            }).catch((e) => {
                SetErrorMessage(e.message);
                SetConnecting(false)
            });
        }

    }, [connecting]);
    return (<>

        <div className='formZone'>
            <h1>Signin</h1>
            {errorMessage != "" && <h2>{errorMessage}</h2>}
            <form>
                <input type="text" placeholder='Email' onChange={e => getText(e, SetEmail)}></input>
                <input type="password" placeholder='password' onChange={e => getText(e, SetPassord)}></input>

                <Link to="/"> Not a user ? Signin</Link>
            </form>
            <button onClick={() => {
                Dispatch(login({ loggedIn: true, email: email }));
                SetConnecting(true);
            }}> Signin</button>
        </div>

    </>
    )
}

function getText(e, stateCallback) {
    stateCallback(e.target.value);
}
export default Signin;