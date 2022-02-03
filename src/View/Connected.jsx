import React, { useState, useEffect } from "react";
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { logout } from "../Service/AuthFirebaseService";
import app from "../Service/config-firebase.service"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Store/Signin/userSlice';
const auth = getAuth(app);
function Connected() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [disconnetion, SetDisconnection] = useState(false);
    const Dispatch = useDispatch();
    useEffect(() => {
        if (disconnetion)
            navigate('/Connected', { replace: true });
    }, [logout]);

    return (<>
        {user == null && navigate("/Signin")}
        <h1>Connected !</h1>
        <h2>User: {useSelector(state => state.userSlice.email)}</h2>
        <button onClick={() => {
            logout(auth, setUser)
            Dispatch(login({ loggedIn: false, email: "" }))
            SetDisconnection(true);
        }}>Logout</button>
    </>)
}


export default Connected;