import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Spark7 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'area',
                    height: 160,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    width: 2
                },
                colors: ['#6435c9'],
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                },
                title: {
                    text: '$519,590.70',
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                },
                subtitle: {
                    text: 'Profits',
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                }

            },
            series: [
                { data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }
            ]
        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                />
            </div>
        );
    }
}

export default Spark7;
