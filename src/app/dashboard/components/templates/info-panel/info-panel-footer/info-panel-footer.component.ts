import {Component, Input} from '@angular/core';
import {TextWithIconComponent} from "../../icons/text-with-icon/text-with-icon.component";
import {IconType} from "@ng-icons/core/lib/components/icon/icon.component";

@Component({
  selector: 'template-info-panel-footer',
  templateUrl: './info-panel-footer.component.html',
  styleUrl: './info-panel-footer.component.scss'
})
export class InfoPanelFooterComponent {
    @Input() label: string;
    @Input() icon: IconType;
    @Input() iconSize: number;
    @Input() iconColor: string = 'primary';
}
