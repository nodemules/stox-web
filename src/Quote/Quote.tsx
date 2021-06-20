import style from "./Quote.module.scss";

interface GlobalQuote {
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
    if (!quote) return null;

    const {symbol, price, latestTradingDay, change, changePercent} = quote;

    return (
        <div className={style.Quote}>
            <span className={style.QuoteElement}>
                {symbol}
            </span>
            <span className={style.QuoteElement}>
                ${price}
            </span>
            <span className={style.QuoteElement}>
                {latestTradingDay}
            </span>
            <span className={style.QuoteElement}>
                {change}
            </span>
            <span className={style.QuoteElement}>
                {changePercent}
            </span>
        </div>
    )
}

export default Quote
