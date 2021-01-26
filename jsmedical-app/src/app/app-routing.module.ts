import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
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