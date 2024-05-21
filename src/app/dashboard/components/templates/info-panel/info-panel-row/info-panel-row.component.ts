import {Component, Input} from '@angular/core';

@Component({
  selector: 'template-info-panel-row',
  templateUrl: './info-panel-row.component.html',
  styleUrl: './info-panel-row.component.scss'
})
export class InfoPanelRowComponent {
    @Input() label: string;
    @Input() value: string;
}
