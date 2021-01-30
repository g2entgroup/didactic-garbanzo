import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Timeline2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 350,
                    type: 'rangeBar',
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                colors: ['#6435c9', '#f66d9b'],
                yaxis: {
                    min: new Date('2019-03-01').getTime(),
                    max: new Date('2019-03-14').getTime(),
                    title: {
                        text: '$235,312',
                        offsetX: 0,
                        style: {
                            fontSize: '24px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    },
                },
                xaxis: {
                    type: 'datetime'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [50, 0, 100, 100]
                    }
                }
            },
            series: [{
                name: 'Bob',
                data: [{
                    x: 'Design',
                    y: [new Date('2019-03-02').getTime(), new Date('2019-03-03').getTime()]
                }, {
                    x: 'Code',
                    y: [new Date('2019-03-02').getTime(), new Date('2019-03-04').getTime()]

                }, {
                    x: 'Test',
                    y: [new Date('2019-03-04').getTime(), new Date('2019-03-07').getTime()]
                }, {
                    x: 'Deployment',
                    y: [new Date('2019-03-11').getTime(), new Date('2019-03-12').getTime()]
                }]
            }, {
                name: 'Joe',
                data: [{
                    x: 'Design',
                    y: [new Date('2019-03-01').getTime(), new Date('2019-03-02').getTime()]
                }, {
                    x: 'Code',
                    y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()]
                }, {
                    x: 'Test',
                    y: [new Date('2019-03-06').getTime(), new Date('2019-03-09').getTime()]
                }, {
                    x: 'Deployment',
                    y: [new Date('2019-03-10').getTime(), new Date('2019-03-11').getTime()]
                }]
            }],
        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="rangeBar"
                    height="350px"
                />
            </div>
        );
    }
}

export default Timeline2;
