/* eslint-disable */
// @ts-ignore
import {Equity, EquityActive, Cryptocurrency, CryptocurrencyActive, ETF, ETFActive, Future, FutureActive, Index, IndexActive} from "../Trending/Trending.module.scss"
/* eslint-enable */
import style from "./Quote.module.scss";
import {useState} from "react";
import {getSparks} from "../Api/stox/MarketApi";

export interface GlobalQuote {
    quoteType: string | undefined,
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

type QuoteType = {
    name: string,
    inactiveClassName: string | undefined,
    activeClassName: string | undefined
}

const quoteTypes = [{
    name: "EQUITY",
    inactiveClassName: Equity,
    activeClassName: EquityActive,
}, {
    name: "CRYPTOCURRENCY",
    inactiveClassName: Cryptocurrency,
    activeClassName: CryptocurrencyActive,
}, {
    name: "ETF",
    inactiveClassName: ETF,
    activeClassName: ETFActive,
}, {
    name: "FUTURE",
    inactiveClassName: Future,
    activeClassName: FutureActive,
}, {
    name: "INDEX",
    inactiveClassName: Index,
    activeClassName: IndexActive,
}].map(quoteType => quoteType as QuoteType)

const quoteTypesMap = quoteTypes.reduce((map, quoteType) => ({...map, [quoteType.name]: quoteType}), {})

const Quote = ({quote}: { quote?: GlobalQuote }) => {

    const [spark, setSpark] = useState<any>()

    const sparkle = () => quote && getSparks([quote.symbol]).then(setSpark).catch(console.error)

    if (!quote) return null;

    const {quoteType = "", symbol, price, latestTradingDay, change, changePercent} = quote;

    const {inactiveClassName: className} = (quoteTypesMap as any)[quoteType] || {}

    return (
        <div className={style.Quote}>
            <span className={className || style.Element} onClick={sparkle}>
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
