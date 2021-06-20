import AuthenticationContext from "./AuthenticationContext";
import {PropsWithChildren} from "react";

const Authenticated = ({children}: PropsWithChildren<any>) => {
    return (
        <AuthenticationContext.Consumer>
            {
                ({user}) => (
                    user ? {...children} : <></>
                )
            }
        </AuthenticationContext.Consumer>
    )
}

export default Authenticated
