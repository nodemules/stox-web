import style from "./GetQuote.module.scss"
import {getQuote} from "../Api/StoxQuoteApi";
import {ChangeEvent, MouseEvent, useState} from "react";
import JsonRenderer from "../JsonRenderer";

const GetQuote = () => {

    const [searchTerm, setSearchTerm] = useState<string>();
    const [quote, setQuote] = useState<any>();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value as string);
    }

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (searchTerm) getQuote(searchTerm).then(setQuote).catch(console.error)
    }

    return (
        <div className={style.GetQuote}>
            <input
                type={"text"}
                placeholder={"Search for a stock using a ticker symbol (e.g. IBM)"}
                value={searchTerm}
                onChange={onChange}
            />
            <button
                onClick={search}
                disabled={!searchTerm}
            >
                Stox!
            </button>
            {quote && <JsonRenderer data={quote}/>}
        </div>
    )
}

export default GetQuote
