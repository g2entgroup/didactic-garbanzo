import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class CircleMultiple extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 250,
                    type: 'radialBar',
                },
                colors: ['#6435c9', '#7d53d6', '#9773e4', '#a28ad6'],
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return 249
                                }
                            }
                        }
                    }
                },
                labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
            },
            series: [44, 55, 67, 83]
        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="radialBar"
                    height="250px"
                />
            </div>
        );
    }
}

export default CircleMultiple;
