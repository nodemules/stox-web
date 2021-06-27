import style from "./ToggleGroup.module.scss";

export type ToggleButtonProps = {
    name: string,
    inactiveClassName: string | undefined,
    activeClassName: string | undefined
}

type ToggleGroupProps = { items: Array<ToggleButtonProps>, selected: String | undefined, onSelected: (selected: undefined | String) => void }

const ToggleGroup = ({items = [], selected, onSelected}: ToggleGroupProps) => {
    const changeType = (value: String) => onSelected(value === selected ? undefined : value)
    return (
        <div className={style.ToggleGroup}>
            <div className={style.Buttons}>
                {
                    items.map(({name, inactiveClassName, activeClassName}) => {
                        const active = name === selected
                        const className = () => active ? (activeClassName || style.Active) : (inactiveClassName || style.Button)
                        return (
                            <span
                                key={name}
                                className={className()}
                                onClick={() => changeType(name)}
                            >
                                {name}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ToggleGroup
