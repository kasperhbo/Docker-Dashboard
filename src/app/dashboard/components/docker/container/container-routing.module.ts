import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContainerComponent} from "./container.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: ContainerComponent},
        {path: '**', redirectTo: '../notfound'}
    ])],
    exports: [RouterModule]
})
export class ContainerRoutingModule {
}

