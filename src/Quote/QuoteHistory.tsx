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
        local.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
        local.splice(0, 1)
        console.log(local)
        return local;
    }, [history])

    return (
        <div>
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
