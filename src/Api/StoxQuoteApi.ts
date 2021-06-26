import instance from "./Axios";

const host = "http://localhost:8201";

export const getQuote = (symbol: String) => instance.get(`${host}/quote/${symbol}`)
.then(response => (response.data))
.catch(error => (error.response.data))
