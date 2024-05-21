import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerRoutingModule} from './container-routing.module';
import {ContainerListComponent} from "./list/container-list.component";
import {ContainersService} from "./service/containers.service";
import {ContainerCardComponent} from "./list/container-card.component";
import {ContainerDetailComponent} from "./detail/container-detail.component";
import {Card, CardModule} from "primeng/card";
import {ContainerComponent} from "./container.component";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {ChipModule} from "primeng/chip";
import {RippleModule} from "primeng/ripple";
import {
    ContainerTemplateComponent, GetIsoDatePipe, GetStateTextPipe, TrimContainerNamePipe
} from "./template/container-template.component";
import {PanelModule} from "primeng/panel";
import {CheckboxModule} from "primeng/checkbox";
import {TooltipModule} from "primeng/tooltip";
import {InputSwitchModule} from "primeng/inputswitch";
import {NgIconsModule} from "@ng-icons/core";
import {
    bootstrapBarChart,
    bootstrapFileEarmarkText,
    bootstrapInfoCircle, bootstrapPaperclip,
    bootstrapTerminal
} from "@ng-icons/bootstrap-icons";
import {TemplateModule} from "../../templates/template.module";

@NgModule({
    imports: [
        ContainerRoutingModule,
        CommonModule,
        FormsModule,
        PanelModule,
        ButtonModule,
        InputTextModule,
        CheckboxModule,
        TooltipModule,
        DialogModule,
        TableModule,
        ChipModule,
        CardModule,
        InputSwitchModule,
        TemplateModule,
        NgIconsModule.withIcons(
            {
                bootstrapFileEarmarkText,
                bootstrapInfoCircle,
                bootstrapBarChart,
                bootstrapTerminal,
                bootstrapPaperclip,
            }
        ),

    ],
    exports: [
        ContainerListComponent,
        ContainerCardComponent,
        ContainerDetailComponent,
        ContainerTemplateComponent,
        GetStateTextPipe,
        GetIsoDatePipe,
        TrimContainerNamePipe,

        ContainerComponent,
    ],
    providers: [
        ContainersService
    ],
    declarations: [
        ContainerListComponent,
        ContainerCardComponent,
        ContainerDetailComponent,
        ContainerTemplateComponent,
        GetStateTextPipe,
        GetIsoDatePipe,
        TrimContainerNamePipe,

        ContainerComponent,
    ],
})
export class ContainerModule {

}
