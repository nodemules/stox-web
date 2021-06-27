import instance from "../Axios";
import {GlobalQuote} from "../../Quote/Quote";

const host = "http://localhost:8201";

export const getTrending = (quoteType: String | undefined): Promise<Array<GlobalQuote>> =>
    instance.get(`${host}/market/trending`, {
        params: {quoteType}
    })
    .then(response => (response.data))
    .catch(error => {
        throw error.response.data
    })

export const getSparks = (symbols: Array<String>): Promise<Array<any>> =>
    instance.get(`${host}/market/sparks`, {
        params: {symbol: symbols},
        paramsSerializer: params => params.symbol.map((symbol: String) => `symbol=${symbol}`).join("&")
    })
