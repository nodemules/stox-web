import style from "./SignIn.module.scss"
import firebase from "./Firebase";
import {MouseEvent, useContext} from "react";
import AuthenticationContext from "./AuthenticationContext";

const SignIn = () => {

    const {setUser, setAccessToken} = useContext(AuthenticationContext)

    const google = (event: MouseEvent<HTMLImageElement>) => {
        event.preventDefault()
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential as firebase.auth.OAuthCredential;
            // This gives you a Google Access Token. You can use it to access the Google API.
            setAccessToken(credential.accessToken)
            // The signed-in user info.
            setUser(result.user || undefined);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
            console.error(`[${errorCode}] ${errorMessage} for ${email} with ${credential}`)
        });
    };


    return (
        <div>
            <img
                className={style.GoogleSSO}
                onClick={google}
                src={"/assets/google/sso/1x/btn_google_signin_light_normal_web.png"}
                alt={"Google SSO"}
            />
        </div>
    )
}

export default SignIn
