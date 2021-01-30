import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Splinechart extends Component {
    constructor(props) {
        super(props);
        this.state = {

            series: [{
                name: 'Brand',
                data: [212.00, 182.20, 254.15, 284.74, 291.04, 380.01]
            }, {
                name: 'NFT',
                data: [172.30, 172.04, 154.15, 174.01, 191.20, 227.27]
            },
            {
                name: 'Tickets',
                data: [52.00, 22.00, 64.00, 14.00, 51.00, 87.00]
            }],
            options: {
                chart: {
                    height: 285,
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#17C2D7', '#9367B4', '#9367B4'],
                markers: {
                    size: 3,
                    strokeColor: ['#17C2D7', '#9367B4', '#9367B4'],
                  },
                stroke: {
                    width: 2,
                    curve: 'smooth',
                },
                xaxis: {
                    type: 'category',
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                yaxis: {
                    tickAmount: 8,
                    min: 0,
                    max: 400
                },
                legend: {
                    show: false
                }
                // tooltip: {
                //     x: {
                //         format: 'dd/MM/yy HH:mm'
                //     },
                // },
            },
        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    height="285px"
                />
            </div>
        );
    }
}

export default Splinechart;
