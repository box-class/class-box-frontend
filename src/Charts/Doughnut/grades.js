import React, {Component} from 'react';
import Chart from "chart.js";

export default class GradesDoughnut extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    chartRef = React.createRef();

    componentDidMount() {
        console.log(this.props)
        const myChartRef = this.chartRef.current.getContext("2d");

        const gradientColors = [
            {
                start: 'rgba(86,89,166,1)',
                end: 'rgba(163,89,200,1)'
            },{
                start: '#f7f7f7',
                end: '#f7f7f7'
            }
        ]

        let gradients = [];

        gradientColors.forEach( function( item ){
            if(item.start === "#FFF") {
                let gradient = myChartRef.createLinearGradient(75, 75, 0, 0);
                gradient.addColorStop(0, item.start);
                gradient.addColorStop(1, item.end);
                gradients.push(gradient);
            } else {
                let gradient = myChartRef.createLinearGradient(85, 75, 120, 130);
                gradient.addColorStop(0, item.start);
                gradient.addColorStop(1, item.end);
                gradients.push(gradient);
            }
        });

        let gradeDiff = 100 - this.props.grade;

        new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [this.props.grade, gradeDiff],
                        backgroundColor: gradients,
                        borderWidth: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 60,
                rotation: -0.65 * Math.PI
            }
        })
    }


    render() {
        return (
            <div>
                <canvas id="myChart" ref={this.chartRef} />
            </div>
        )
    }
}