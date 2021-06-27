import instance from "../Axios";
import {GlobalQuote} from "../../Quote/Quote";

const host = "http://localhost:8201";

export const getQuote = (symbol: String): Promise<GlobalQuote> => instance.get(`${host}/quote/${symbol}`)
.then(response => (response.data))
.catch(error => {throw error.response.data})
