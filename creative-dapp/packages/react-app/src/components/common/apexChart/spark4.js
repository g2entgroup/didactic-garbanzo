import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Spark4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'line',
                    width: 100,
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    width: 2
                },
                colors: ['#6435c9'],
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false,
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
                    type="line"
                    height="35px"
                />
            </div>
        );
    }
}

export default Spark4;
