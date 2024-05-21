import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {ContainersService} from "../service/containers.service";
import {DockerContainerDetails} from "../models/container-detailed";
import {interval} from "rxjs";


@Component(
    {
        selector: 'docker-container-detail',
        templateUrl: './container-detail.component.html',
        styleUrls: ['./container-detail.component.scss']
    }
)
export class ContainerDetailComponent implements OnInit, OnDestroy {
    @Input() container: DockerContainerDetails;
    display: boolean = false;

    private fetchInterval: number = 3000;
    private fetchIntervalSubscription: any;

    constructor(private containerService: ContainersService) {
    }

    ngOnDestroy(): void {
        if (this.fetchIntervalSubscription) {
            this.fetchIntervalSubscription.unsubscribe();
        }
    }

    ngOnInit(): void {
        this.fetchContainer();
        this.fetchIntervalSubscription = interval(this.fetchInterval).subscribe(() => this.fetchContainer());
    }

    private fetchContainer() {
        if (this.container) {
            this.containerService.getSingle(this.container.id).subscribe(
                (container: DockerContainerDetails) => {
                    this.container = container;
                },
                error => {
                    console.error('Error fetching container', error);
                }
            );
        }
    }

    onHide() {
        this.container = undefined;
        this.display = false;
    }

    show(container: DockerContainerDetails) {
        this.container = container;
        this.display = true;
    }

    protected readonly Object = Object;
}
