import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import {AuthService} from "../dashboard/services/auth.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.css']
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
    ) { }

    // private userDropdownVisible = true;
    //
    // toggleUserDropdown() {
    //     this.userDropdownVisible = this.userDropdownVisible;
    // }
    logout($event: MouseEvent) {
        this.authService.logout();
    }
}
