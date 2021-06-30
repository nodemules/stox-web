export default interface Spark {
    symbol: string,
    chartPreviousClose: number,
    end: number,
    high: number,
    low: number,
    start: number,
    previousClose: number,
    dataGranularity: number,

    timeseries: Array<Array<number>>
}
