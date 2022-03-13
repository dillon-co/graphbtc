import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {
        const dom: any = document.querySelector('body');
        // if (window.innerWidth <= 992) {
        dom.classList.remove('sidemenu-open');
        // } else {
            // dom.classList.add('sidemenu-open');
        // }
        const marginTops: any = document.querySelector('.footer').clientHeight;
        (document.querySelector('.content') as HTMLElement).style.paddingBottom = marginTops + 10 + 'px';
        (document.querySelector('.content') as HTMLElement).style.marginBottom = '-' + marginTops + 'px';
        (document.querySelector('.loader') as HTMLElement).style.display = 'none';
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        if (window.innerWidth <= 992 ) {
            if (dom.classList.contains('sidemenu-open')) {
                dom.classList.remove('sidemenu-open');
            }
        }
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
