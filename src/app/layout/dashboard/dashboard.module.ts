import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule as Ng2Charts } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        StatModule,
        Ng2Charts,
        // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
        // set defaults here
        radius: 50,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: '#78C000',
        innerStrokeColor: '#C7E596',
        animationDuration: 300,
      })
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {}
