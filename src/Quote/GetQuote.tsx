// @ts-ignore
import {Clear, QuoteContainer, Search, Submit} from "./GetQuote.module.scss"
import {getQuote} from "../Api/stox/QuoteApi";
import {ChangeEvent, MouseEvent, useContext, useState} from "react";
import Quote from "./Quote";
import QuoteContext from "./QuoteContext";

const GetQuote = () => {
    const {value: quote, set: setQuote} = useContext(QuoteContext)

    const [searchTerm, setSearchTerm] = useState<string>("");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value as string);
    }

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (searchTerm) getQuote(searchTerm).then(setQuote).catch(console.error)
    }

    const clear = () => {
        setSearchTerm("");
    }

    return (
        <div style={{marginTop: "100px"}}>
            <form>
                <input
                    className={Search}
                    type="text"
                    placeholder="Search for a stock (e.g. IBM)"
                    value={searchTerm}
                    onChange={onChange}
                />
                {
                    searchTerm === quote?.symbol ?
                        <button
                            className={Clear}
                            onClick={clear}
                        >
                            Clear!
                        </button>
                        :
                        <button
                            className={Submit}
                            type="submit"
                            onClick={search}
                            disabled={!searchTerm}
                        >
                            Stox!
                        </button>
                }
            </form>
            <div className={QuoteContainer}>
                <Quote quote={quote}/>
            </div>
        </div>
    )
}

export default GetQuote
