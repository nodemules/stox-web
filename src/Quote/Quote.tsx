import style from "./Quote.module.scss";
import {useEffect, useState} from "react";
import {getSparks} from "../Api/stox/MarketApi";
import Currency from "../Components/Currency";
import TickerBlock from "../Ticker/TickerBlock";
import SparkChart from "../Chart/SparkChart";
import Spark from "../Chart/Spark";
import {fromQuoteType} from "../Ticker/TickerType";

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

const Quote = ({quote}: { quote?: GlobalQuote }) => {

    const [spark, setSpark] = useState<Spark>()

    const sparkle = () =>
        quote && getSparks([quote.symbol])
        .then(sparks => sparks[0] && setSpark(sparks[0]))
        .catch(console.error)

    useEffect(() => {
        setSpark(spark => undefined)
    }, [quote])

    if (!quote) return null;

    const {quoteType = "", symbol, price, latestTradingDay, change, changePercent} = quote;

    const tickerType = fromQuoteType(quoteType)

    return (
        <div>
            <div className={style.Quote}>
                <TickerBlock quoteType={quoteType} onClick={sparkle}>
                    {symbol}
                </TickerBlock>
                <span className={style.Element}>
                <Currency value={price}/>
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
                                <Currency value={change}/>
                            </span>
                                <span className={className}>
                                {changePercent}
                            </span>
                            </>
                        )
                    })()
                }
            </div>
            {spark && <SparkChart spark={spark} tickerType={tickerType}/>}
        </div>
    )
}

export default Quote
