import './Logo.scss'

const Logo = ({name}: { name: String }) => {

    return (
        <div className="logo texture">
            <div className="title texture">
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default Logo