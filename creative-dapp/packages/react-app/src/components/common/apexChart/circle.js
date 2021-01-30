import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Circle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 250,
                    type: 'radialBar',
                },
                colors: ['#f66d9b'],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['Cricket'],
            },
            series: [70],
        };
    }
    render() {
        return (
            <div>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="radialBar"
                    height="250px"
                />
            </div>
        );
    }
}

export default Circle;
