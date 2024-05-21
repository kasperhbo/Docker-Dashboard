import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {ContainerListComponent} from "./list/container-list.component";
import {Container} from "./models/container";
import {ContainerDetailComponent} from "./detail/container-detail.component";
import {ContainersService} from "./service/containers.service";
import {DockerContainerDetails} from "./models/container-detailed";

@Component(
    {
        selector: 'docker-container',
        templateUrl: './container.component.html',
        styleUrls: ['./container.component.scss']
    }
)
export class ContainerComponent implements OnInit, OnDestroy{
    @ViewChild('containerListComponent') containerList: ContainerListComponent;
    @ViewChild('containerDetailComponent') containerDetail: ContainerDetailComponent;

    containers: Container[] = [];
    selectedContainer: DockerContainerDetails = undefined;

    constructor(private containerService: ContainersService) {

    }

    ngOnDestroy(): void {

    }

    ngOnInit(): void {

    }

    onSelectContainer(event: Container) {
        this.containerService.getSingle(event.id).subscribe((container: DockerContainerDetails) => {
            this.selectedContainer = container;
            this.containerDetail.show(this.selectedContainer);
            console.log(this.selectedContainer.networkSettings);
            console.log(this.selectedContainer);
        });
    }
}
