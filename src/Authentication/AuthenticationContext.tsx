import React from "react";
import firebase from "firebase";

export interface Authentication {
    user: firebase.User,
    accessToken: string,
    setUser: (user?: firebase.User) => {},
    setAccessToken: (accessToken?: String) => {},
    authenticating: boolean,
    setAuthenticating: (authenticating: boolean) => {},
    logout: () => {}
}

const AuthenticationContext = React.createContext<Authentication>({} as Authentication);

export default AuthenticationContext
