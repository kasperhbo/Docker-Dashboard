import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [

        RouterModule.forChild([
        {
            path: '',
            children: [
                {
                    path: 'containers', loadChildren: () => import('./container/container.module').then(m => m.ContainerModule)
                },
            ],
        },
        {path: '**', redirectTo: '../notfound'},
    ])],
    exports: [RouterModule]
})

export class DockerRoutingModule {

}

// imports: [RouterModule.forChild([
//     { path: '', component: DashboardComponent }
// ])],
//     exports: [RouterModule]
