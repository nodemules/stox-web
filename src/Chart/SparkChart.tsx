import scss from "./SparkChart.module.scss"

import Spark from "./Spark";
import HighchartsReact from "highcharts-react-official";
import Highstock from "highcharts/highstock";
import TickerType from "../Ticker/TickerType";

type SparkChartProps = {
    spark: Spark,
    tickerType?: TickerType
}

const SparkChart = ({spark, tickerType}: SparkChartProps) => {

    const color = tickerType || "#722C73";

    const style = {
        color: "#505050",
        fontSize: "1.15em",
        fontFamily: "\"Doppio One\", sans-serif",
        fontWeight: 900,
        fontStyle: "italic"
    }

    const line = {
        lineWidth: 3,
        marker: {
            radius: 3
        },
        states: {
            hover: {
                lineWidth: 3
            }
        },
        threshold: null,
        tooltip: {
            cursor: {
                // eslint-disable-next-line no-template-curly-in-string
                pointFormat: "{series.name}: <b>${point.y}</b><br/>"
            }
        }
    }

    const options = {
        chart: {
            zoomType: 'x',
            backgroundColor: "#FFF"
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        navigator: {
            maskFill: color + "30"
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    },
                    stops: [
                        // @ts-ignore
                        [1, color],
                        // @ts-ignore
                        [0, Highstock.color(color).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 3
                },
                lineWidth: 3,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                threshold: null
            },
            line,
            series: {
                color
            }
        },
        rangeSelector: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        series: [{
            type: 'line',
            name: `${spark.symbol}`,
            data: spark.timeseries
        }],
        timezoneOffset: new Date().getTimezoneOffset(),
        xAxis: {
            labels: {
                style,
                overflow: "allow"
            },
            type: 'datetime'
        },
        yAxis: {
            labels: {
                align: "right",
                autoRotation: [-45],
                // eslint-disable-next-line no-template-curly-in-string
                format: "${value:,.2f}",
                style,
                overflow: "allow",
                x: 60
            }
        },
    }
    return (
        <span className={scss.SparkChart}>
            <div className={scss.Title}
                 style={{color: tickerType}}>Current Price for {spark.symbol}!</div>
            <HighchartsReact
                highcharts={Highstock}
                constructorType={"stockChart"}
                options={options}
            />
            <span className={scss.Stripe} style={{backgroundColor: tickerType}}/>
        </span>
    )
}

export default SparkChart
