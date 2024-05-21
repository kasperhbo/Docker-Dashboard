import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Container} from "../models/container";
import {ApiSettings} from "../../../../settings/api-settings";
import {AuthService} from "../../../../services/auth.service";
import {HttpserviceService} from "../../../../services/httpservice.service";
import {DockerContainerDetails} from "../models/container-detailed";

import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ContainersService extends HttpserviceService {
    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService, Container);
    }

    override getList(): Observable<Container[]> {
        return super.getList(ApiSettings.DOCKER_CONTAINER_ENDPOINT + '/list');
    }

    override getSingle(containerID: string): Observable<DockerContainerDetails> {
        if (!this.authService.isAuthenticated()) {
            return new Observable<DockerContainerDetails>(
                observer => {
                    observer.error('Not authenticated');
                }
            );
        }

        let finalUrl = ApiSettings.DOCKER_CONTAINER_ENDPOINT;
        let pathParams = {container_id: containerID};
        for (let index = 0; index < Object.keys(pathParams).length; index++) {
            if (index == 0) {
                finalUrl += '?';
            } else {
                finalUrl += '&';
            }
            finalUrl += Object.keys(pathParams)[index] + '=' + pathParams[Object.keys(pathParams)[index]];
        }

        return this.http.get(finalUrl, {headers: this.authService.getHeaders()}).pipe(
            map((data: any) => {
                return this.objectMapper.parse<DockerContainerDetails>(JSON.stringify(data), {mainCreator: () => [DockerContainerDetails]});
            })
        );

    }


    startContainer(id: string): Observable<any> {
        return super.post(ApiSettings.DOCKER_CONTAINER_ENDPOINT + '/start', { container_id: id});
    }

    stopContainer(id: string): Observable<any> {
        return super.post(ApiSettings.DOCKER_CONTAINER_ENDPOINT + '/stop', { container_id: id});
    }
}

