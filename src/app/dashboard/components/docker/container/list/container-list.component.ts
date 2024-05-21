import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Container} from "../models/container";
import {ContainersService} from "../service/containers.service";
import {interval, Subscription} from "rxjs";

@Component({
    selector: 'docker-container-list',
    templateUrl: './container-list.component.html',
    styleUrls: ['./container-list.component.scss']
})
export class ContainerListComponent implements OnInit, OnDestroy {
    @Input() private containers: Container[] = [];
    @Output() onSelectContainer = new EventEmitter<Container>();

    private fetchInterval: number = 3000;
    private fetchIntervalSubscription: any;

    constructor(private containersService: ContainersService) {
    }

    get containerList(): Container[] {
        return this.containers;
    }

    ngOnInit() {
        this.fetchContainers();
        this.fetchIntervalSubscription = interval(this.fetchInterval).subscribe(() => this.fetchContainers());
    }

    ngOnDestroy() {
        // Unsubscribe to avoid memory leaks
        if (this.fetchIntervalSubscription) {
            this.fetchIntervalSubscription.unsubscribe();
        }
    }

    private fetchContainers() {
        this.containersService.getList().subscribe(
            (containers: Container[]) => {
                this.containers = containers;
            },
            error => {
                console.error('Error fetching containers', error);
            }
        );
    }


    trackByContainerId(index: number, container: Container): string {
        return container.id;
    }

    onClick(container: Container) {
        this.onSelectContainer.emit(container);
    }

}
