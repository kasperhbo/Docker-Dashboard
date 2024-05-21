import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {ContainerTemplate} from "./models/ContainerTemplate.model";

@Component({
    selector: 'docker-container-template',
    templateUrl: './container-template.component.html',
    styleUrls: ['./container-template.component.scss']
})
export class ContainerTemplateComponent {
    container: ContainerTemplate = {
        Id: '09309fec034e008fb6459f1807214288d4eb34bfcb72da17782ddef5095f2',
        Name: 'nginx_test',
        newContainerName: '',
        edit: false,
        NetworkSettings: {
            IPAddress: '192.168.1.10'
        },
        State: {
            Running: true,
            Status: 'running',
            ExitCode: 0,
            StartedAt: '2024-05-20T23:09:43Z',
            FinishedAt: ''
        },
        Created: '2024-05-20T21:44:48Z',
        webhookEnabled: false
    };

    isAdmin = true;
    displayCreateWebhookButton = true;
    applicationState = {
        endpoint: {
            type: 1
        }
    };
    activityTime = '3 hours';
    isVisible: boolean = false;

    renameContainer() {
        // Logic to rename the container
        console.log('Renaming container to:', this.container.newContainerName);
        this.container.Name = this.container.newContainerName;
        this.container.edit = false;
    }
}

@Pipe({
    name: 'getstatetext'
})
export class GetStateTextPipe implements PipeTransform {
    transform(state: any): string {
        if (state.Running) {
            return 'Running';
        } else if (state.Status === 'created') {
            return 'Created';
        } else {
            return 'Stopped';
        }
    }
}


@Pipe({
    name:'trimcontainername'
})
export class TrimContainerNamePipe implements PipeTransform {
    transform(name: string): string {
        return name.length > 20 ? name.substring(0, 20) + '...' : name;
    }
}

@Pipe({
    name: 'getisodate'
})
export class GetIsoDatePipe implements PipeTransform {
    transform(date: string): string {
        return new Date(date).toISOString();
    }
}
