import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GaugeChartModule } from 'angular-gauge-chart';

import { DashboardRoutingModule } from './dashboardnetworking-routing.module';
import { DashboardNetworkingComponent } from './dashboardnetworking.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        NgbDropdownModule,
        Ng2Charts,
        NgbTabsetModule,
        GaugeChartModule,
        // Specify ng-circle-progress as an import
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 50,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: '#78C000',
            innerStrokeColor: '#C7E596',
            animationDuration: 300
        })
    ],
    declarations: [DashboardNetworkingComponent]
})
export class DashboardNetworkingModule {}
