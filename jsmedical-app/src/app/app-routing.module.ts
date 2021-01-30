import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
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