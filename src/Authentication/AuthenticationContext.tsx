import React, {useEffect, useState} from "react";
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

export const useAuthentication = (): Authentication => {
    const [user, setUser] = useState<firebase.User>()
    const [accessToken, setAccessToken] = useState<String>()

    const logout = () => {
        firebase.auth().signOut()
        .then(() => {
            setUser(undefined)
            setAccessToken(undefined)
        })
    }

    firebase.auth().onAuthStateChanged(user => {
        setUser(user || undefined)
    })

    useEffect(() => {
        user?.getIdToken(!accessToken).then(setAccessToken)
    }, [user, accessToken])

    return {
        user, setUser, accessToken, setAccessToken, logout
    } as Authentication
}

const AuthenticationContext = React.createContext<Authentication>({} as Authentication);

export default AuthenticationContext
