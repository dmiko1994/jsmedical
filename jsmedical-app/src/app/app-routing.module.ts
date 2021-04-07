import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ColdTherapyComponent } from "./cold-therapy/cold-therapy.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { CryoankleComponent } from "./cryoankle/cryoankle.component";
import { CryohipComponent } from "./cryohip/cryohip.component";
import { CryokneeComponent } from "./cryoknee/cryoknee.component";
import { CryoshoulderComponent } from "./cryoshoulder/cryoshoulder.component";
import { CryospineComponent } from "./cryospine/cryospine.component";
import { DvtInfoComponent } from "./dvt-info/dvt-info.component";
import { LymphedemaComponent } from "./lymphedema/lymphedema.component";
import { ManaflowComponent } from "./manaflow/manaflow.component";
import { PatientEducationComponent } from "./patient-education/patient-education.component";
import { PlasmaflowComponent } from "./plasmaflow/plasmaflow.component";
import { ProductsComponent } from "./products/products.component";

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
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'plasmaflow',
        component: PlasmaflowComponent
    },
    {
        path: 'manaflow',
        component: ManaflowComponent
    },
    {
        path: 'cryo-knee',
        component: CryokneeComponent
    },
    {
        path: 'cryo-hip',
        component: CryohipComponent
    },
    {
        path: 'cryo-shoulder',
        component: CryoshoulderComponent
    },
    {
        path: 'cryo-ankle',
        component: CryoankleComponent
    },
    {
        path: 'cryo-spine',
        component: CryospineComponent
    },
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