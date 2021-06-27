import style from "./Trending.module.scss"
import {useEffect, useState} from "react";
import {getTrending} from "../Api/stox/MarketApi";
import {GlobalQuote} from "../Quote/Quote";
import TrendingQuote from "./TrendingQuote";
import ToggleGroup from "../Components/ToggleGroup";

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
            <ToggleGroup
                elements={["EQUITY", "CRYPTOCURRENCY", "ETF"]}
                selected={quoteType}
                onSelected={setQuoteType}
            />
            <div className={style.Quotes}>
                {
                    trending.map(quote => (<TrendingQuote key={quote.symbol} quote={quote}/>))
                }
            </div>
        </div>
    )
}

export default Trending
