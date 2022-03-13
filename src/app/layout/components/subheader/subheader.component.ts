import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-subheader',
    templateUrl: './subheader.component.html',
    styleUrls: ['./subheader.component.scss']
})
export class SubHeaderComponent implements OnInit {
    model: any;

    ngOnInit() {}
}
