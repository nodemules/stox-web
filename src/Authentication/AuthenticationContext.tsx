import React, {useEffect, useState} from "react";
import firebase from "firebase";

export interface Authentication {
    user: firebase.User,
    accessToken: string,
    setUser: (user?: firebase.User) => {},
    setAccessToken: (accessToken?: String) => {},
    logout: () => {},
    authenticated: boolean,
    setAuthenticated: () => {}
}

export const useAuthentication = (): Authentication => {
    const [user, setUser] = useState<firebase.User>()
    const [accessToken, setAccessToken] = useState<String>()
    const [authenticated, setAuthenticated] = useState<boolean>(false)

    const logout = () => {
        firebase.auth().signOut()
        .then(() => {
            setUser(undefined)
            setAccessToken(undefined)
            setAuthenticated(false)
        })
    }

    firebase.auth().onAuthStateChanged(user => {
        setUser(user || undefined)
    }, () => setAuthenticated(false))

    useEffect(() => {
        authenticated || user?.getIdToken(!accessToken)
        .then(token => {
            setAccessToken(token)
            setAuthenticated(true)
        })
        .catch(() => setAuthenticated(false))
    }, [user, accessToken, authenticated])

    return {
        user, setUser, accessToken, setAccessToken, logout, authenticated
    } as Authentication
}

const AuthenticationContext = React.createContext<Authentication>({} as Authentication);

export default AuthenticationContext
