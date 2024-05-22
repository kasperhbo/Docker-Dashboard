import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [

        RouterModule.forChild([
        {
            path: 'gitlab',
        },
        {path: '**', redirectTo: '../notfound'},
    ])],
    exports: [RouterModule]
})

export class GitlabDockerRoutingModule {

}

// imports: [RouterModule.forChild([
//     { path: '', component: DashboardComponent }
// ])],
//     exports: [RouterModule]
