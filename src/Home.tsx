import Logo from "./Logo";
import SignIn from "./SignIn";
import React from "react";
import AuthenticationContext from "./AuthenticationContext";
import Authenticated from "./Authenticated";
import UserProfileBadge from "./UserProfileBadge";
import Logout from "./Logout";

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
                            <div>
                                <UserProfileBadge/>
                                <div style={{paddingTop: "10px"}}>
                                    <Logout />
                                </div>
                            </div>
                        </Authenticated>
                        {!user && <SignIn/>}
                    </>
                )
            }
        </AuthenticationContext.Consumer>
    )
}

export default Home
