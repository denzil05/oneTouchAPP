import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ClaimsViewComponent } from './pages/claims-view/claims-view.component';
import { PolicyViewComponent } from './pages/policy-view/policy-view.component';
import { ClaimTypeComponent } from './pages/claim-type/claim-type.component';
import { BrokerViewComponent } from './pages/broker-view/broker-view.component';
import { ProductLaunchComponent } from './pages/product-launch/product-launch.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ClaimsViewComponent,
    PolicyViewComponent,
    ClaimTypeComponent,
    BrokerViewComponent,
    ProductLaunchComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot()
    ],
  providers: [SidebarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
