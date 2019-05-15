import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrokerViewComponent } from './pages/broker-view/broker-view.component';
import { ClaimTypeComponent } from './pages/claim-type/claim-type.component';
import { ClaimsViewComponent } from './pages/claims-view/claims-view.component';
import { PolicyViewComponent } from './pages/policy-view/policy-view.component';
import { ProductLaunchComponent } from './pages/product-launch/product-launch.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'broker', component: BrokerViewComponent},
  {path: 'claimtype', component: ClaimTypeComponent},
  {path: 'claimview', component: ClaimsViewComponent},
  {path: 'policy', component: PolicyViewComponent},
  {path: 'productlaunch', component: ProductLaunchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
