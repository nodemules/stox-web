type CurrencyProps = {
    value: number,
    locale?: string,
    currencyType?: string
}

const Currency = ({value, locale = "en-US", currencyType: currency = "USD"}: CurrencyProps) =>
    <div>
        {
            value.toLocaleString(locale, {
                useGrouping: true,
                style: "currency",
                currency
            })
        }
    </div>

export default Currency
