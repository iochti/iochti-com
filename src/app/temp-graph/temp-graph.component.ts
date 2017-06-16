import Chart from 'chart.js';
import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'iochti-temp-graph',
    template: '<canvas #donut></canvas>'
})

export class TempGraphComponent implements OnInit {
    @ViewChild('donut') donut: ElementRef;

    constructor(
    ) { }

    ngOnInit() {
        let donutCtx = this.donut.nativeElement.getContext('2d');

        var data = {
            labels: [
                "Value A",
                "Value B"
            ],
            datasets: [
                {
                    "data": [101342, 55342],   // Example data
                    "backgroundColor": [
                        "#1fc8f8",
                        "#76a346"
                    ]
                }]
        };

        var chart = new Chart(
            donutCtx,
            {
                "type": 'doughnut',
                "data": data,
                "options": {
                    "cutoutPercentage": 50,
                    "animation": {
                        "animateScale": true,
                        "animateRotate": false
                    }
                }
            }
        );
    }
}
