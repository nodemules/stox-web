import style from "./TrendingQuote.module.scss"
import {GlobalQuote} from "../Quote/Quote";
import QuoteContext from "../Quote/QuoteContext";
import {useContext} from "react";

const TrendingQuote = ({quote, className = style.Element}: { quote: GlobalQuote, className: string | undefined }) => {
    const quoteContext = useContext(QuoteContext)

    const {symbol, price} = quote;
    return (
        <span className={style.TrendingQuote}>
            <span className={className} onClick={() => quoteContext.set(quote)}>
                <div>{symbol}</div>
                <div>{price}</div>
            </span>
        </span>
    )
}

export default TrendingQuote
