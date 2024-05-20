import {Component} from '@angular/core';
import {ContainersService} from "../../../../services/docker/containers.service";
import {Container} from "../../../../models/docker/container";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
    selector: 'app-container-list',
    templateUrl: './container-list.component.html',
    styleUrl: './container-list.component.scss'
})
export class ContainerListComponent {
    containers: Container[] = [];

    constructor(private containersService: ContainersService) {
        this.containersService.getList().subscribe(containers => {
            this.containers = containers;
        });

        console.trace('ContainerListComponent.constructor', this.containers);
    }

}
