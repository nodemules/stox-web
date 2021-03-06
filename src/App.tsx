import React from 'react';
import './App.css';
import Home from "./Home";
import AuthenticationContext, {useAuthentication} from "./Authentication/AuthenticationContext";

const App = () => {
    const authentication = useAuthentication()

    return (
        <div className="App">
            <AuthenticationContext.Provider value={authentication}>
                <Home/>
            </AuthenticationContext.Provider>
        </div>
    );
}

export default App;
