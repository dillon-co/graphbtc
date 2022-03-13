import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

declare var $: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboardnetworking.component.html',
    styleUrls: ['./dashboardnetworking.component.scss'],
    animations: [routerTransition()]
})
export class DashboardNetworkingComponent implements OnInit {
    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/intro-1.jpg',
                label: 'First slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/intro-2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/intro-3.jpg',
                label: 'Third slide label',
                text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    // summaryChart1 chart
    public summaryChart1Options: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            enabled: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }
            ],
            yAxes: [
                {
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }
            ]
        }
    };
    public summaryChart1Labels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public summaryChart1Type: string;
    public summaryChart1Legend: boolean;

    public summaryChart1Data: any[] = [
        {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A',
            backgroundColor: 'transparent',
            borderColor: '#FFFFFF',
            borderWidth: '1.5',
            radius: 0,
            fill: false
        }
    ];

    // summaryChart2 chart
    public summaryChart2Options: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            enabled: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        display: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }
            ],
            yAxes: [
                {
                    ticks: {
                        display: false
                    },
                    display: false,
                    stacked: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'Value'
                    }
                }
            ]
        }
    };
    public summaryChart2Labels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public summaryChart2Type: string;
    public summaryChart2Legend: boolean;

    public summaryChart2Data: any[] = [
        {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A',
            backgroundColor: '#FFFFFF',
            borderColor: 'transparent',
            borderWidth: '1.5',
            radius: 0,
            fill: false
        }
    ];

    // mixedchartjs chart
    public mixedchartjsOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Stacked Area'
        },
        tooltips: {
            mode: 'index'
        },
        hover: {
            mode: 'index'
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        display: true,
                        fontColor: '#90b5ff'
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }
            ],
            yAxes: [
                {
                    ticks: {
                        display: true,
                        fontColor: '#90b5ff'
                    },
                    display: true,
                    stacked: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'Value'
                    }
                }
            ]
        }
    };
    public mixedchartjsLabels: string[] = ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
    public mixedchartjsType: string;
    public mixedchartjsLegend: boolean;

    public mixedchartjsData: any[] = [
        {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'My First dataset',
            borderWidth: '2',
            borderColor: '#5B92FF',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
        {
            data: [25, 39, 55, 64, 35, 29, 24],
            label: 'My Second dataset',
            borderWidth: '2',
            borderColor: '#F85778',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
        {
            data: [80, 87, 92, 79, 68, 65, 55],
            label: 'My Third dataset',
            borderWidth: '2',
            borderColor: '#1FC96E',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }
    ];

    // donughtchart chart
    public donughtchartOptions: any = {
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        cutoutPercentage: 70,
        responsive: true,
        aspectRatio: '1',
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };
    public donughtchartLabels: string[] = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
    public donughtchartType: string;
    public donughtchartLegend: boolean;

    public donughtchartData: any[] = [
        {
            data: [30, 20, 35, 15],
            backgroundColor: ['rgba(240, 240, 240, 0.5)', '#5B92FF', '#1FC96E', '#F85778'],
            label: 'Dataset 1'
        }
    ];

    // linechartlarge chart
    public linechartlargeOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Stacked Area'
        },
        tooltips: {
            mode: 'index'
        },
        hover: {
            mode: 'index'
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        display: true,
                        fontColor: '#90b5ff'
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }
            ],
            yAxes: [
                {
                    ticks: {
                        display: false,
                        fontColor: '#90b5ff'
                    },
                    display: false,
                    stacked: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'Value'
                    }
                }
            ]
        }
    };
    public linechartlargeLabels: string[] = ['0', 'Q1', 'Q2', 'Q3', 'Q4'];
    public linechartlargeType: string;
    public linechartlargeLegend: boolean;

    public linechartlargeData: any[] = [
        {
            data: [30, 20, 35, 15, 20],
            label: 'My First dataset',
            borderWidth: '2',
            borderColor: '#efe9e9',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }
    ];

    // barcharts chart
    public barchartsOptions: any = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
            position: 'top'
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        display: true,
                        fontColor: '#90b5ff'
                    },
                    categoryPercentage: 0.3,
                    barPercentage: 1,
                    barThickness: 5
                }
            ],
            yAxes: [
                {
                    display: false
                }
            ]
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart'
        }
    };
    public barchartsLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    public barchartsType: string;
    public barchartsLegend: boolean;

    public barchartsData: any[] = [
        {
            label: 'Dataset 1',
            backgroundColor: '#efe9e9',
            borderColor: '#efe9e9',
            borderWidth: 1,
            data: [30, 20, 35, 15, 20]
        },
        {
            label: 'Dataset 2',
            backgroundColor: '#5B92FF',
            borderColor: '#5B92FF',
            borderWidth: 1,
            data: [35, 26, 25, 45, 30]
        }
    ];

    /* guage chart  */
    public canvasWidth = 300;
    public needleValue = 30;
    public centralLabel = '';
    public options = {
        hasNeedle: false,
        needleColor: 'gray',
        needleUpdateSpeed: 1000,
        arcColors: ['#1FC96E', 'lightgray'],
        arcDelimiters: [20],
        needleStartValue: 30
    };

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
        const clone = JSON.parse(JSON.stringify(this.summaryChart1Data));
        clone[0].data = data;
        this.summaryChart1Data = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }


    ngOnInit() {
        this.summaryChart1Type = 'line';
        this.summaryChart2Type = 'bar';
        this.mixedchartjsType = 'line';
        this.donughtchartType = 'doughnut';
        this.linechartlargeType = 'line';
        this.barchartsType = 'bar';

        $('#mapwrap').vectorMap({
            map: 'world_mill'
        });
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
