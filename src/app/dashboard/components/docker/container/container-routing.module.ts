import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContainerListComponent} from "./list/container-list.component";
import {ContainerComponent} from "./container.component";
import {ContainerDetailComponent} from "./detail/container-detail.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: ContainerComponent},
        {path: '**', redirectTo: '../notfound'}
    ])],
    exports: [RouterModule]
})
export class ContainerRoutingModule {
}

