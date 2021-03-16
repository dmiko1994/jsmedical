import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DvtInfoComponent } from './dvt-info/dvt-info.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { PatientEducationComponent } from './patient-education/patient-education.component';
import { PhilanthropyComponent } from './philanthropy/philanthropy.component';
import { QualityServiceComponent } from './quality-service/quality-service.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ColdTherapyComponent } from './cold-therapy/cold-therapy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LymphedemaComponent } from './lymphedema/lymphedema.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientEducationComponent,
    AboutComponent,
    QualityServiceComponent,
    PhilanthropyComponent,
    DvtInfoComponent,
    ColdTherapyComponent,
    ContactUsComponent,
    LymphedemaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent]
})
export class AppModule { }
