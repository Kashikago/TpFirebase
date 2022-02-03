import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function createUser(email, password, confirmPassword, errorCallback) {
    const auth = getAuth();
    console.log("Creating user");
    console.log(`${email} ${password} ${confirmPassword} `)
    if (password == confirmPassword)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User registered");
            })
            .catch((e) => {
                errorCallback(e.message)
            });
    else {
        errorCallback("Passwords not identical")
    }
}

function connect(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
}

function logout(auth, stateCallback) {
    auth.signOut();
    stateCallback(null);
}

export { createUser, connect, logout };