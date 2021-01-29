import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientEducationComponent } from './patient-education/patient-education.component';
import { AboutComponent } from './about/about.component';
import { QualityServiceComponent } from './quality-service/quality-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientEducationComponent,
    AboutComponent,
    QualityServiceComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent]
})
export class AppModule { }
