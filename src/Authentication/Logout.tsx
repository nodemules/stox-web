import style from "./Logout.module.scss"
import {useContext} from "react";
import AuthenticationContext from "./AuthenticationContext";

const Logout = () => {
    const {logout} = useContext(AuthenticationContext)
    return (
        <button className={style.Logout} onClick={logout}>
            Sign Out
        </button>
    )
}

export default Logout
