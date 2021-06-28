import style from "./TrendingQuote.module.scss"
import {GlobalQuote} from "../Quote/Quote";
import QuoteContext from "../Quote/QuoteContext";
import {useContext} from "react";
import Currency from "../Components/Currency";

type TrendingQuoteProps = { quote: GlobalQuote, className: string | undefined }

const TrendingQuote = ({quote, className = style.Element}: TrendingQuoteProps) => {
    const quoteContext = useContext(QuoteContext)

    const {symbol, price} = quote;
    return (
        <span className={style.TrendingQuote}>
            <span className={className} onClick={() => quoteContext.set(quote)}>
                <div>{symbol}</div>
                <Currency value={price}/>
            </span>
        </span>
    )
}

export default TrendingQuote
