import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientEducationComponent } from './patient-education/patient-education.component';
import { PhilanthropyComponent } from './philanthropy/philanthropy.component';
import { QualityServiceComponent } from './quality-service/quality-service.component';
import { DvtInfoComponent } from './dvt-info/dvt-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientEducationComponent,
    AboutComponent,
    QualityServiceComponent,
    PhilanthropyComponent,
    DvtInfoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent]
})
export class AppModule { }
