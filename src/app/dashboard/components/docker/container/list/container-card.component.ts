import {Component, Input} from "@angular/core";
import {Container} from "../models/container";
import {ContainersService} from "../service/containers.service";

@Component({
    selector: 'docker-container-card',
    templateUrl: './container-card.component.html',
    styleUrls: ['./container-card.component.scss']
})
export class ContainerCardComponent {

    @Input() container: Container;

    constructor(private containersService: ContainersService) {
    }

    private fetchCanStartContainer() {
    }

    private fetchCanStopContainer() {
    }

    private fetchContainer(){
    }


    startContainer(container: Container) {
        // container.startContainer(this.containersService);
        this.containersService.startContainer(container.id);
    }

    stopContainer(container: Container) {
        this.containersService.stopContainer(container.id);
    }
}
