// @ts-ignore
import {Block} from "../global.module.scss"
import {useContext, useEffect, useMemo, useState} from "react";
import Quote, {GlobalQuote} from "./Quote";
import QuoteContext from "./QuoteContext";

interface HistoricalRecord<T> {
    createdAt: number,
    record: T
}

const QuoteHistory = () => {
    const [history, setHistory] = useState<Array<HistoricalRecord<GlobalQuote>>>([])

    const quote = useContext(QuoteContext)

    useEffect(() => {
        quote.value && setHistory(history => [...history, {
            createdAt: new Date().getTime(),
            record: quote.value
        } as HistoricalRecord<GlobalQuote>])
    }, [quote.value])

    const value = useMemo(() => {
        const local = [...history]
        local.splice(-1, 1)
        return local.reverse();
    }, [history])

    return (
        <div style={{width: "fit-content", margin: "auto"}}>
            {
                history.length > 1 &&
                <div style={{marginBottom: "1em"}}>
                  <div className={Block}>RECENT STOX</div>
                </div>
            }
            {
                value
                .map(
                    ({record: quote, createdAt}) =>
                        <Quote
                            key={createdAt}
                            quote={quote}
                        />
                )
            }
        </div>
    )
}

export default QuoteHistory
