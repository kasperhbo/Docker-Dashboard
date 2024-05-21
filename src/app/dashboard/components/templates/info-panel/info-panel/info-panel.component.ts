import {Component, Input} from '@angular/core';

@Component({
  selector: 'template-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.scss'
})
export class InfoPanelComponent {
    @Input() titleIcon: string = "";
    @Input() title: string     = "No Title";

}
