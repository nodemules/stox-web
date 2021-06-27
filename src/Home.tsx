import Logo from "./Logo";
import SignIn from "./Authentication/SignIn";
import React from "react";
import AuthenticationContext from "./Authentication/AuthenticationContext";
import Authenticated from "./Authentication/Authenticated";
import UserProfileBadge from "./User/UserProfileBadge";
import Logout from "./Authentication/Logout";
import GetQuote from "./Quote/GetQuote";
import Trending from "./Trending/Trending";
import {QuoteContextProvider} from "./Quote/QuoteContext";
import {useAxios} from "./Api/Axios";
import QuoteHistory from "./Quote/QuoteHistory";

const Home = () => {
    useAxios()
    return (
        <AuthenticationContext.Consumer>
            {
                ({authenticated}) => (
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
                            <QuoteContextProvider>
                                <Trending />
                                <GetQuote/>
                                <QuoteHistory />
                            </QuoteContextProvider>
                        </Authenticated>
                        {!authenticated && <SignIn/>}
                    </>
                )
            }
        </AuthenticationContext.Consumer>
    )
}

export default Home
