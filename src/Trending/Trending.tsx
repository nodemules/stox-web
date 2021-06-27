import style from "./Trending.module.scss"
import {useCallback, useEffect, useState} from "react";
import {getTrending} from "../Api/stox/MarketApi";
import {GlobalQuote} from "../Quote/Quote";
import TrendingQuote from "./TrendingQuote";
import ToggleGroup, {ToggleButtonProps} from "../Components/ToggleGroup";

const Trending = () => {
    const [open, setOpen] = useState(false)
    const [trending, setTrending] = useState<Array<GlobalQuote>>([])
    const [quoteType, setQuoteType] = useState<String>()

    useEffect(() => {
        open && getTrending(quoteType).then(setTrending).catch(console.error)
    }, [open, quoteType])

    const toggleVisibility = useCallback(() => setOpen(!open), [open])

    const groups = [{
        name: "EQUITY",
        inactiveClassName: style.Equity,
        activeClassName: style.EquityActive,
    }, {
        name: "CRYPTOCURRENCY",
        inactiveClassName: style.Cryptocurrency,
        activeClassName: style.CryptocurrencyActive,
    }, {
        name: "ETF",
        inactiveClassName: style.ETF,
        activeClassName: style.ETFActive,
    }]

    return (
        <div className={style.Trending}>
            <div
                className={style.Title}
                onClick={toggleVisibility}
            >
                Trending Tickers
            </div>
            {
                open ?
                    <>
                        <ToggleGroup
                            items={groups.map(it => it as ToggleButtonProps)}
                            selected={quoteType}
                            onSelected={setQuoteType}
                        />
                        <div className={style.Quotes}>
                            {
                                trending.map(quote => (
                                    <TrendingQuote key={quote.symbol} quote={quote}/>))
                            }
                        </div>
                    </>
                    : <></>
            }
        </div>
    )
}

export default Trending
