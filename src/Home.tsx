import Logo from "./Logo";
import SignIn from "./Authentication/SignIn";
import React from "react";
import AuthenticationContext from "./Authentication/AuthenticationContext";
import Authenticated from "./Authentication/Authenticated";
import UserProfileBadge from "./User/UserProfileBadge";
import Logout from "./Authentication/Logout";
import GetQuote from "./Quote/GetQuote";

const Home = () => {
    return (
        <AuthenticationContext.Consumer>
            {
                ({user, accessToken}) => (
                    <>
                        <Logo name={"Stox"}/>
                        <p>
                            Check on your favorite stox!
                        </p>
                        <Authenticated>
                            <UserProfileBadge/>
                            <div style={{paddingTop: "10px", marginBottom: "50px"}}>
                                <Logout/>
                            </div>
                            <GetQuote/>
                        </Authenticated>
                        {!user && <SignIn/>}
                    </>
                )
            }
        </AuthenticationContext.Consumer>
    )
}

export default Home
