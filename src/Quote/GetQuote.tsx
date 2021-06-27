// @ts-ignore
import {Search, Submit, QuoteContainer, Clear} from "./GetQuote.module.scss"
import {getQuote} from "../Api/stox/QuoteApi";
import {ChangeEvent, MouseEvent, useContext, useEffect, useState} from "react";
import Quote, {GlobalQuote} from "./Quote";
import QuoteContext from "./QuoteContext";

const GetQuote = () => {
    const quoteContext = useContext(QuoteContext)

    const [quote, setQuote] = useState<GlobalQuote | undefined>(undefined);
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
        setQuote(undefined);
    }

    useEffect(() => {
        if (quoteContext.value) {
            setQuote(quoteContext.value)
            setSearchTerm(quoteContext.value.symbol)
        }
    }, [quoteContext.value])

    useEffect(() => {
        quote === quoteContext.value || quoteContext.set(quote)
    }, [quote, quoteContext])

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
