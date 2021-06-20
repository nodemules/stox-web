import style from "./UserProfileBadge.module.scss"
import AuthenticationContext from "./AuthenticationContext";

const UserProfileBadge = () => {
    return (
        <AuthenticationContext.Consumer>
            {
                ({user}) => (
                    user ?
                        <div>
                            <img
                                className={style.Photo}
                                src={user.photoURL || undefined}
                                alt={"User"}
                            />
                            <div className={style.Name}>
                                {user.displayName}
                            </div>
                        </div>
                        :
                        <div/>
                )
            }
        </AuthenticationContext.Consumer>
    )
}

export default UserProfileBadge
