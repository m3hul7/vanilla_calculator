import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    PagesComponent,
    PrivacyComponent,
    HomeComponent,
    SupportComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
