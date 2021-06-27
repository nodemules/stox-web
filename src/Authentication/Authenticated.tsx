import AuthenticationContext from "./AuthenticationContext";
import {PropsWithChildren} from "react";

const Authenticated = ({children}: PropsWithChildren<any>) => {
    return (
        <AuthenticationContext.Consumer>
            {
                ({authenticated}) => (
                    <>{authenticated ? children : null}</>
                )
            }
        </AuthenticationContext.Consumer>
    )
}

export default Authenticated
