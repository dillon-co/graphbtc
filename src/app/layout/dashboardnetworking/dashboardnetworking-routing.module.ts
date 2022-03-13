import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardNetworkingComponent } from './dashboardnetworking.component';

const routes: Routes = [
    {
        path: '', component: DashboardNetworkingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}

