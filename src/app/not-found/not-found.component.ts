import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        const marginTops: any = document.querySelector('.footer').clientHeight;
        (document.querySelector('.content') as HTMLElement).style.marginBottom = '-' + marginTops + 'px';

        const headerhegiht: any = document.querySelector('.header').clientHeight;
        const loginheight: any = window.innerHeight - marginTops - 60 - headerhegiht;

        (document.querySelector('.login-row-height') as HTMLElement).style.minHeight = loginheight + 'px';

        const dom: any = document.querySelector('body');
        dom.classList.remove('sidemenu-open');
    }
}
