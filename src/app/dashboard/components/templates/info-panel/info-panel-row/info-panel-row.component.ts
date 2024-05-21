import {Component, ContentChild, Input, TemplateRef, ViewChild} from '@angular/core';
import {Header} from "primeng/api";

@Component({
    selector: 'template-info-panel-row',
    templateUrl: './info-panel-row.component.html',
    styleUrl: './info-panel-row.component.scss',
    host: {
        class: 'p-element'
    }
})
export class InfoPanelRowComponent {
    @Input() customHeaderTemplate: TemplateRef<any>;
    @Input() customValueTemplate: TemplateRef<any>;

    @Input() label: string;
    @Input() value: any;
}
