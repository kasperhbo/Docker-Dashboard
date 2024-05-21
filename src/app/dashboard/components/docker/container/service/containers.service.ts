import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Container} from "../models/container";
import {ApiSettings} from "../../../../settings/api-settings";
import {AuthService} from "../../../../services/auth.service";
import {HttpserviceService} from "../../../../services/httpservice.service";

@Injectable({
    providedIn: 'root'
})
export class ContainersService extends HttpserviceService {
    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService, Container);
    }

    override getList(): Observable<Container[]> {
        return super.getList(ApiSettings.DOCKER_CONTAINER_ENDPOINT + 'list');
    }

    startContainer(id: string): Observable<any> {
        return super.post(ApiSettings.DOCKER_CONTAINER_ENDPOINT + 'start', { container_id: id});
    }

    stopContainer(id: string): Observable<any> {
        return super.post(ApiSettings.DOCKER_CONTAINER_ENDPOINT + 'stop', { container_id: id});
    }
}
