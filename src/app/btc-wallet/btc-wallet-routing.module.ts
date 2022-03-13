import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BtcWalletComponent } from './btc-wallet.component';

const routes: Routes = [
    {
        path: '', component: BtcWalletComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BtcWalletRoutingModule {
}
