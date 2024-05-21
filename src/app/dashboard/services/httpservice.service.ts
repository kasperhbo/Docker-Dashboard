import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {ClassType} from "jackson-js/dist/@types";
import {map} from "rxjs/operators";
import {JacksonParseUtil} from "../utils/jackson-parse-utils";
import {Params} from "@angular/router";
import {ObjectMapper} from "jackson-js";

@Injectable({
    providedIn: 'root'
})
export class HttpserviceService {

    protected objectMapper = new ObjectMapper();

    constructor(protected http: HttpClient, protected authService: AuthService, protected classType: ClassType<any>) {
    }

    protected getList(url: string, classType = this.classType): Observable<any[]> {
        if (!this.authService.isAuthenticated()) {
            return new Observable<any[]>(
                observer => {
                    observer.error('Not authenticated');
                }
            );
        }
        return this.http.get<any[]>(url, {headers: this.authService.getHeaders()}).pipe(
            map(response => {
                // @ts-ignore
                return JacksonParseUtil.parseJSONObjectArray(response.containers, classType);
            })
        )
    }

    protected getSingle(url: string, pathParams: Params,
                        classType = this.classType): Observable<any> {
        return new Observable(error => {
            error.error('Not implemented');
        })
    }


    // @ts-ignore
    protected post(url: string, data: any): Observable<any> {
        if (!this.authService.isAuthenticated()) {
            return new Observable<any[]>(
                observer => {
                    observer.error('Not authenticated');
                }
            );
        }

        const authHeader = this.authService.getHeaders();

        this.http.post<any>(url, data, {headers: authHeader}).subscribe(response => {
            return response;
        });
    }
}
