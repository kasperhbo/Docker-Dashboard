import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DockerRoutingModule} from './docker-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormsModule} from "@angular/forms";
import {ChartModule} from "primeng/chart";
import {MenuModule} from "primeng/menu";
import {TableModule} from "primeng/table";
import {StyleClassModule} from "primeng/styleclass";
import {PanelMenuModule} from "primeng/panelmenu";
import {ButtonModule} from "primeng/button";
import {ContainerModule} from "./container/container.module";


@NgModule({
    imports: [
        CommonModule,
        DockerRoutingModule,
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
    ],
    exports: [
        DashboardComponent
    ],
    declarations: [DashboardComponent],
    providers: []
})
export class DockerModule {

}
