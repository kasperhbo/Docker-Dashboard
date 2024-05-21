import {Component, Input} from '@angular/core';

@Component({
  selector: 'template-info-panel-footer',
  templateUrl: './info-panel-footer.component.html',
  styleUrl: './info-panel-footer.component.scss'
})
export class InfoPanelFooterComponent {
    @Input() label: string = 'no label';
    @Input() icon: string = undefined;
}
