import style from "./Trending.module.scss"
import {useEffect, useState} from "react";
import {getTrending} from "../Api/stox/MarketApi";
import {GlobalQuote} from "../Quote/Quote";
import TrendingQuote from "./TrendingQuote";

const Trending = () => {
    const [trending, setTrending] = useState<Array<GlobalQuote>>([])
    const [quoteType, setQuoteType] = useState<String>()

    useEffect(() => {
        getTrending(quoteType).then(setTrending).catch(console.error)
    }, [quoteType])

    return (
        <div className={style.Trending}>
            <div className={style.Title}>
                Trending Tickers
            </div>
            <div className={style.Buttons}>
                {
                    (() => {
                        const className = (value: String) => value === quoteType ? style.Active : style.Button
                        const changeType = (value: String) => setQuoteType(value === quoteType ? undefined : value)
                        return (
                            <>
                                <span className={className("EQUITY")} onClick={() => changeType("EQUITY")}>EQUITY</span>
                                <span className={className("CRYPTOCURRENCY")} onClick={() => changeType("CRYPTOCURRENCY")}>CRYPTO</span>
                            </>
                        )
                    })()
                }
            </div>
            <div className={style.Quotes}>
                {
                    trending.map(quote => (<TrendingQuote key={quote.symbol} quote={quote}/>))
                }
            </div>
        </div>
    )
}

export default Trending
