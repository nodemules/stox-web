interface GlobalQuote {
    symbol: string,
    open: number,
    high: number,
    price: number,
    volume: number,
    latestTradingDay: Date,
    previousClose: number,
    change: number,
    percentChange: string
}

const Quote = ({quote}: { quote?: GlobalQuote }) => {
    if (!quote) return null;

    const {symbol, price, change, percentChange} = quote;

    return (
        <div>
            <span>
                {symbol}
            </span>
            <span>
                ${price}
            </span>
            <span>
                {change}
            </span>
            <span>
                {percentChange}
            </span>
        </div>
    )
}

export default Quote
