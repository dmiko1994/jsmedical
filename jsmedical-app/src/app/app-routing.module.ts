import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ColdTherapyComponent } from "./cold-therapy/cold-therapy.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { DvtInfoComponent } from "./dvt-info/dvt-info.component";
import { LymphedemaComponent } from "./lymphedema/lymphedema.component";
import { PatientEducationComponent } from "./patient-education/patient-education.component";

const homeRoutes: Routes = [
    { 
        path: '',
        component: AboutComponent
    },
    {
        path: 'education',
        component: PatientEducationComponent
    },
    {
        path: 'dvt-info',
        component: DvtInfoComponent
    },
    {
        path: 'cold-therapy',
        component: ColdTherapyComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'lymphedema',
        component: LymphedemaComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(homeRoutes, {
            enableTracing: false,
            onSameUrlNavigation: 'reload'
        })
    ],
    providers:[],
    exports:[RouterModule],
})
export class AppRoutingModule {}