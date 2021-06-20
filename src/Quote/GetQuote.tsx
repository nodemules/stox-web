// @ts-ignore
import {Search, Submit} from "./GetQuote.module.scss"
import {getQuote} from "../Api/StoxQuoteApi";
import {ChangeEvent, MouseEvent, useState} from "react";
import Quote from "./Quote";

const GetQuote = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [quote, setQuote] = useState<any>();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value as string);
    }

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (searchTerm) getQuote(searchTerm).then(setQuote).catch(console.error)
    }

    return (
        <div>
            <form>
                <input
                    className={Search}
                    type="text"
                    placeholder="Search for a stock (e.g. IBM)"
                    value={searchTerm}
                    onChange={onChange}
                />
                <button
                    className={Submit}
                    type="submit"
                    onClick={search}
                    disabled={!searchTerm}
                >
                    Stox!
                </button>
            </form>
            <Quote quote={quote}/>
        </div>
    )
}

export default GetQuote
