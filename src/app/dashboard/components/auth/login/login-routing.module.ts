import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {AuthGuard} from "../../../guards/auth.guard";
import {DashboardComponent} from "../../../../demo/components/dashboard/dashboard.component";

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: LoginComponent,
        },
        {
            path: 'dashboard',
            component: DashboardComponent,
            canActivate: [AuthGuard]
        }

    ])],
    exports: [RouterModule]
})
export class LoginRoutingModule {
    
}
