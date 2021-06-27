import style from "./TrendingQuote.module.scss"
import {GlobalQuote} from "../Quote/Quote";
import QuoteContext from "../Quote/QuoteContext";
import {useContext} from "react";

const TrendingQuote = ({quote}: { quote: GlobalQuote }) => {
    const quoteContext = useContext(QuoteContext)

    const {symbol} = quote;
    return (
        <span className={style.TrendingQuote}>
            <span className={style.Element} onClick={() => quoteContext.set(quote)}>
                {symbol}
            </span>
        </span>
    )
}

export default TrendingQuote
