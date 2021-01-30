import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Donut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 250,
                    type: 'donut',
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    show: true,
                },
                colors: ['#6435c9', '#7d53d6', '#9773e4', '#a28ad6'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            series: [44, 55, 41, 17]
        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="donut"
                    height="250px"
                />
            </div>
        );
    }
}

export default Donut;
