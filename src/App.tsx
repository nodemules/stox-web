import React, {useEffect, useState} from 'react';
import './App.css';
import Home from "./Home";
import AuthenticationContext, {Authentication} from "./AuthenticationContext";
import firebase from "firebase";

const App = () => {
    const [user, setUser] = useState<firebase.User>()
    const [accessToken, setAccessToken] = useState<String>()

    const logout = () => {
        firebase.auth().signOut()
        .then(() => {
            setUser(undefined)
            setAccessToken(undefined)
        })
    }

    const authentication = {
        user, setUser, accessToken, setAccessToken, logout
    } as Authentication

    firebase.auth().onAuthStateChanged(user => {
        setUser(user || undefined)
    })

    useEffect(() => {
        user?.getIdToken(!accessToken).then(setAccessToken)
    }, [user, accessToken])

    return (
        <div className="App">
            <AuthenticationContext.Provider value={authentication}>
                <Home/>
            </AuthenticationContext.Provider>
        </div>
    );
}

export default App;
