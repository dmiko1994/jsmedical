import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ColdTherapyComponent } from "./cold-therapy/cold-therapy.component";
import { DvtInfoComponent } from "./dvt-info/dvt-info.component";
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