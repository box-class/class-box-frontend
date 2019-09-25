import React, {Component} from 'react';
import Chart from "chart.js";


Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
export default class GPALineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        // const { width: graphWidth } = myChartRef.canvas;

        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "GPA",
                        data: [2.7, 3.0, 3.2, 3.1, 3.3, 3.3, 3.3, 3.3, 3.5, 3.7, 3.6, 3.8 ],
                        fill: false,
                        borderColor: '#FF6A89'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRation: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: '#5659A6',
                            fontSize: 16,
                            fontStyle: 'bold'
                        },
                        gridLines: {
                            color: '#EEE'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: '#5659A6',
                            fontSize: 16,
                            fontStyle: 'bold'
                        },
                        gridLines: {
                            color: '#EEE'
                        }
                    }]
                },

                layout: {
                    padding: {
                        top: 20,
                        left: 25,
                        right: 25,
                        bottom: 20
                    }
                }
            }
        })
    }


    render() {
        return (
            <div>
                <canvas id="lineChart" ref={this.chartRef} />
            </div>
        )
    }
}