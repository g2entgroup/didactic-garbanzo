import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Polyfill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                plotOptions: {
                    radar: {
                        size: 140,
                        polygons: {
                            strokeColor: '#e9e9e9',
                            fill: {
                                colors: ['#f8f8f8', '#fff']
                            }
                        }
                    }
                },
                colors: ['#6435c9'],
                markers: {
                    size: 4,
                    colors: ['#fff'],
                    strokeColor: '#6435c9',
                    strokeWidth: 2,
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function (val, i) {
                            if (i % 2 === 0) {
                                return val
                            } else {
                                return ''
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Series 1',
                data: [20, 100, 40, 30, 50, 80, 33],
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

export default Polyfill;
