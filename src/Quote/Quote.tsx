import style from "./Quote.module.scss";
import {useState} from "react";
import {getSparks} from "../Api/stox/MarketApi";

export interface GlobalQuote {
    symbol: string,
    open: number,
    high: number,
    price: number,
    volume: number,
    latestTradingDay: Date,
    previousClose: number,
    change: number,
    changePercent: string
}

const Quote = ({quote}: { quote?: GlobalQuote }) => {

    const [spark, setSpark] = useState<any>()

    const sparkle = () => quote && getSparks([quote.symbol]).then(setSpark).catch(console.error)

    if (!quote) return null;

    const {symbol, price, latestTradingDay, change, changePercent} = quote;

    return (
        <div className={style.Quote}>
            <span className={style.Bright} onClick={sparkle}>
                {symbol}
            </span>
            <span className={style.Element}>
                ${price}
            </span>
            <span className={style.Element}>
                {latestTradingDay}
            </span>
            {
                (() => {
                    const className = change === 0 ?
                        style.Element
                        : change > 0 ?
                            style.Up
                            : style.Down
                    return (
                        <>
                            <span className={className}>
                                {change.toFixed(2)}
                            </span>
                            <span className={className}>
                                {changePercent}
                            </span>
                        </>
                    )
                })()
            }
        </div>
    )
}

export default Quote
