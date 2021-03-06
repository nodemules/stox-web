import React, {PropsWithChildren, useMemo, useState} from "react";
import {GlobalQuote} from "./Quote";

interface ValueContext<T> {
    value: T,
    set: (t: T | undefined) => {},
    clear: () => {}
}

export const useQuoteContext = <T extends any>() => {
    const [value, set] = useState<T | undefined>()

    return useMemo(() => ({
        value,
        set,
        clear: () => set(undefined)
    } as ValueContext<T>), [value])
}

const QuoteContext = React.createContext<ValueContext<GlobalQuote>>({} as ValueContext<GlobalQuote>)

export default QuoteContext;

export const QuoteContextProvider = (props: PropsWithChildren<any>) => {
    const context = useQuoteContext<GlobalQuote>();

    const value = useMemo(() => context, [context])

    return (
        <QuoteContext.Provider value={value}>
            {props.children}
        </QuoteContext.Provider>
    )
}
