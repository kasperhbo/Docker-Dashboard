import {Injectable} from '@angular/core';
import {Container} from "../../models/docker/container";
import {HttpClient} from "@angular/common/http";
import {ApiSettings} from "../../settings/api-settings";
import {catchError, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AuthService} from "../auth.service";

@Injectable({
    providedIn: 'root'
})
export class ContainersService {

    constructor(private http: HttpClient, private authService: AuthService) {

    }

    getList(): Observable<Container[]> {
        if (!this.authService.isAuthenticated()) {
            console.error('ContainersService.getList: User is not authenticated.');
            return new Observable<Container[]>(subscriber => {
                subscriber.next([])
                subscriber.complete();
            });
        }

        return this.http.get<any>(ApiSettings.DOCKER_CONTAINER_ENDPOINT + 'list',
            {headers: this.authService.getHeaders()})
            .pipe(
                map(response => {
                        let containers: Container[] = [];
                        response.containers.forEach((container: any) => {
                            containers.push(new Container(container));
                        });

                        return containers;
                    }
                ),

            );


    }
}
