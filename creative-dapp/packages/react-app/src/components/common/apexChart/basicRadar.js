import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class BasicRadar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                colors: ['#6435c9'],
                labels: ['January', 'February', 'March', 'April', 'May', 'June']
            },
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }],

        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="radar"
                    height="350px"
                />
            </div>
        );
    }
}

export default BasicRadar;
