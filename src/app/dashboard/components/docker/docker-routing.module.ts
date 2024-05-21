import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "../../guards/auth.guard";

@NgModule({
    imports: [RouterModule.forChild([
        // { path: 'docker', loadChildren: () => import('./docker.module').then(m => m.DockerModule)},
        {
            path: '',
            children: [
                {
                    path: 'containers', loadChildren: () => import('./container/container.module').then(m => m.ContainerModule),
                },
                {
                    path: 'detail/:id', loadChildren: () => import('./container/container.module').then(m => m.ContainerModule),
                },
            ],
        },
        {path: '**', redirectTo: '../notfound'}
    ])],
    exports: [RouterModule]
})
export class DockerRoutingModule {

}

// imports: [RouterModule.forChild([
//     { path: '', component: DashboardComponent }
// ])],
//     exports: [RouterModule]
