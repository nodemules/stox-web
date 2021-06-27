import style from "./ToggleGroup.module.scss";

type ToggleGroupProps = { elements: Array<String>, selected: String | undefined, onSelected: (selected: String) => void }

const ToggleGroup = ({elements = [], selected, onSelected}: ToggleGroupProps) => {

    const className = (value: String) => value === selected ? style.Active : style.Button
    const changeType = (value: String) => onSelected(value)
    return (
        <div className={style.ToggleGroup}>
            <div className={style.Buttons}>
                {
                    elements.map(element => (
                        <span
                            className={className(element)}
                            onClick={() => changeType(element)}
                        >
                        {element}
                    </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ToggleGroup
