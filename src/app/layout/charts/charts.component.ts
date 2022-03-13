import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
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

    // mixedchartfulljs chart
    public mixedchartfulljsOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
            text: 'Chart.js Combo Bar Line Chart'
        },
        legend: {
            display: false,
            labels: {
                fontColor: '#cccccc'
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: '#bbbbbb'
                    },
                    gridLines: {
                        color: 'rgba(0,0,0,0.05)',
                        zeroLineColor: 'rgba(255,255,255,0.2)'
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: '#bbbbbb'
                    },
                    gridLines: {
                        color: 'rgba(0,0,0,0.05)',
                        zeroLineColor: 'rgba(0,0,0,0.2)'
                    }
                }
            ]
        }
    };
    public mixedchartfulljsLabels: string[] = ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
    public mixedchartfulljsType: string;
    public mixedchartfulljsLegend: boolean;

    public mixedchartfulljsData: any[] = [
        {
            data: [65, 59, 80, 81, 56, 55, 40],
            type: 'bar',
            maintainAspectRatio: false,
            backgroundColor: '#ff6e73',
            borderColor: '#ff6e73'
        },
        {
            data: [25, 39, 55, 64, 35, 29, 24],
            type: 'line',
            label: 'Dataset 2',
            borderWidth: 1,
            backgroundColor: 'rgba(91, 146, 255, 0.18)',
            borderColor: '#5B92FF'
        },
        {
            data: [80, 87, 92, 79, 68, 65, 55],
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#ffc322',
            borderColor: '#ffc322'
        }
    ];

    // bubblechart chart
    public bubblechartOptions: any = {
        responsive: true,
        title: {
            display: false,
            text: 'Chart.js Bubble Chart'
        },
        tooltips: {
            mode: 'point'
        },
        legend: {
            labels: {
                fontColor: '#cccccc'
            }
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: '#bbbbbb'
                    },
                    gridLines: {
                        color: 'rgba(160, 160, 160, 0.05)',
                        zeroLineColor: 'rgba(160,160,160,0.2)'
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: '#bbbbbb'
                    },
                    gridLines: {
                        color: 'rgba(160, 160, 160, 0.05)',
                        zeroLineColor: 'rgba(160,160,160,0.2)'
                    }
                }
            ]
        }
    };
    public bubblechartLabels: string[] = ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
    public bubblechartType: string;
    public bubblechartLegend: boolean;

    public bubblechartData: any[] = [
        {
            data: [
                { x: 15, y: 10, r: 5 },
                { x: 15, y: 20, r: 5 },
                { x: 22, y: 58, r: 15 },
                { x: 45, y: 81, r: 30 },
                { x: 52, y: 10, r: 5 },
                { x: 74, y: 50, r: 25 },
                { x: 80, y: 19, r: 35 }
            ],
            label: 'My First dataset',
            backgroundColor: '#5B92FF',
            borderColor: '#5B92FF',
            borderWidth: 1
        },
        {
            data: [
                { x: 15, y: 10, r: 15 },
                { x: 25, y: 30, r: 8 },
                { x: 32, y: 68, r: 17 },
                { x: 55, y: 91, r: 20 },
                { x: 62, y: 20, r: 8 },
                { x: 84, y: 60, r: 19 },
                { x: 80, y: 29, r: 23 }
            ],
            label: 'My Second dataset',
            backgroundColor: '#ff6e73',
            borderColor: '#ff6e73',
            borderWidth: 1
        }
    ];

    // radarchart chart
    public radarchartOptions: any = {
        responsive: true,
        legend: {
            display: false,
            position: 'top'
        },
        title: {
            display: false,
            text: 'Chart.js Radar Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            },
            pointLabels: {
                fontColor: '#a1c1ff'
            }
        }
    };
    public radarchartLabels: string[] = ['0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
    public radarchartType: string;
    public radarchartLegend: boolean;

    public radarchartData: any[] = [
        {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'My First dataset',
            backgroundColor: '#ff6e73',
            borderColor: '#ff6e73',
            pointBackgroundColor: '#ff898d'
        },
        {
            data: [25, 39, 55, 64, 35, 29, 24],
            label: 'My Second dataset',
            backgroundColor: '#5B92FF',
            borderColor: '#5B92FF',
            pointBackgroundColor: '#8bb2ff'
        },
        {
            data: [35, 49, 58, 68, 40, 32, 28],
            label: 'My Third dataset',
            backgroundColor: '#ffc322',
            borderColor: '#ffc322',
            pointBackgroundColor: '#ffd461'
        }
    ];

    // doughutchart chart
    public doughutchartOptions: any = {
        responsive: true,
        legend: {
            display: false,
            position: 'top'
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
    public doughutchartLabels: string[] = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
    public doughutchartType: string;
    public doughutchartLegend: boolean;

    public doughutchartData: any[] = [
        {
            data: [10, 15, 15, 40, 30],
            backgroundColor: ['#ff6e73', '#ff7600', '#ffc322', '#0fddad', '#5B92FF'],
            label: 'Dataset 1',
            borderColor: 'rgb(0, 0, 0, 0)'
        }
    ];

    // Pie chart
    public piechartOptions: any = {
        responsive: true,
        legend: {
            display: false,
            position: 'top'
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
    public piechartLabels: string[] = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
    public piechartType: string;
    public piechartLegend: boolean;

    public piechartData: any[] = [
        {
            data: [10, 15, 15, 40, 30],
            backgroundColor: ['#ff6e73', '#ff7600', '#ffc322', '#0fddad', '#5B92FF'],
            label: 'Dataset 1',
            borderColor: 'rgb(0, 0, 0, 0)'
        }
    ];

    // Polar chart
    public polarchartOptions: any = {
        responsive: true,
            legend: {
                display: false,
                position: 'right',
            },
            title: {
                display: false,
                text: 'Chart.js Polar Area Chart'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            },
            animation: {
                animateRotate: false,
                animateScale: true
            }
    };
    public polarchartLabels: string[] = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
    public polarchartType: string;
    public polarchartLegend: boolean;

    public polarchartData: any[] = [
        {
            data: [10, 15, 15, 40, 30],
            backgroundColor: [
                '#ff6e73',
                '#ff7600',
                '#ffc322',
                '#0fddad',
                '#5B92FF',
            ],
            borderColor: 'rgb(0, 0, 0, 0)',
            label: 'My dataset' // for legend
        }
    ];

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    constructor() {}

    ngOnInit() {
        this.mixedchartjsType = 'line';
        this.mixedchartfulljsType = 'bar';
        this.bubblechartType = 'bubble';
        this.radarchartType = 'radar';
        this.doughutchartType = 'doughnut';
        this.piechartType = 'pie';
        this.polarchartType = 'polarArea';
    }
}
