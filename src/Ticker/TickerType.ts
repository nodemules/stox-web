enum TickerType {
    EQUITY = "#f2a413",
    CRYPTOCURRENCY = "#722C73",
    ETF = "#A6261B",
    FUTURE = "#008000",
    INDEX = "#000080",
}

export const fromQuoteType = (quoteType?: String): TickerType | undefined => {
    switch (quoteType) {
        case "EQUITY": return TickerType.EQUITY;
        case "CRYPTOCURRENCY": return TickerType.CRYPTOCURRENCY;
        case "ETF": return TickerType.ETF;
        case "FUTURE": return TickerType.FUTURE;
        case "INDEX": return TickerType.INDEX;
        default: return undefined;
    }
}

export default TickerType
