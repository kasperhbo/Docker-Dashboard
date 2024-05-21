import {Component, Input, OnInit} from "@angular/core";
import {Container} from "../models/container";
import {Port} from "../models/port";


@Component(
    {
        selector: 'docker-container-detail',
        templateUrl: './container-detail.component.html',
        styleUrls: ['./container-detail.component.scss']
    }
)
export class ContainerDetailComponent implements OnInit{
    @Input() selectedContainer: Container = undefined;

    display: boolean = false;

    get container(): Container {
        return this.selectedContainer;
    }

    ngOnInit(): void {
    }

    showDialog() {
        this.display = true;
    }

    onHide(){
        this.selectedContainer = undefined;
    }

    keyDown($event: KeyboardEvent) {
        if ($event.key === 'Escape') {
            this.onHide();
        }
    }
}
