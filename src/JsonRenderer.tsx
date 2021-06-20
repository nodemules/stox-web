import style from "./JsonRenderer.module.scss"

const JsonRenderer = ({data, tabSize = 4}: { data: {}, tabSize?: number }) => {
    return (
        <pre className={style.Json}>
            {JSON.stringify(data, null, tabSize)}
        </pre>
    )
}

export default JsonRenderer
