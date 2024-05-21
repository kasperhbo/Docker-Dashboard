import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {ContainerListComponent} from "./list/container-list.component";
import {Container} from "./models/container";
import {ContainerDetailComponent} from "./detail/container-detail.component";
import {ContainersService} from "./service/containers.service";

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
    selectedContainer: Container = undefined;

    constructor(private containersService: ContainersService) {

    }

    ngOnDestroy(): void {

    }

    ngOnInit(): void {

    }

    onSelectContainer(event: Container) {
        this.selectedContainer = event;
        this.showDialog();
    }

    showDialog() {
        this.containerDetail.showDialog();
    }
}
