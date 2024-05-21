import {Component, Input, OnInit} from '@angular/core';
import {NgIcon} from "@ng-icons/core";
@Component({
  selector: 'template-text-with-icon',
  templateUrl: './text-with-icon.component.html',
  styleUrl: './text-with-icon.component.scss'
})
export class TextWithIconComponent implements OnInit{
    @Input() label: string;
    @Input() icon: string;

    @Input() iconSize: string | number = undefined;
    @Input() iconColor: string = undefined;

    constructor() {

    }

    ngOnInit(): void {
        if (!this.icon) {
            throw new Error('Icon is required');
        }

        if (!this.label) {
            throw new Error('Label is required');
        }

        if (!this.iconColor) {
            this.iconColor = "var(--primary-color)";
        }

        if (!this.iconSize) {
            this.iconSize = '1.2em';
        }
    }
}

