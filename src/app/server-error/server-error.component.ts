import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server-error',
    templateUrl: './server-error.component.html',
    styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {
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
