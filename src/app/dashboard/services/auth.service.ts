import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Router} from "@angular/router";
import {ApiSettings} from "../settings/api-settings";
import {jwtDecode} from "jwt-decode";

interface JwtPayload {
    exp: number;
}

@Injectable({
    providedIn: 'root',

})
export class AuthService {
    private loginUrl = `${ApiSettings.AUTH_ENDPOINT}login`;

    constructor(private http: HttpClient, private router: Router) {
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');

        this.router.navigate(['/auth/logout']).then(r => r);
    }

    login(username: string, password: string) {
        if (this.router.url === '/auth/logout') {
            this.router.navigate(['/auth/login']).then(r => r);
            return;
        }

        this.http.post<any>(this.loginUrl, {
            username: username,
            password: password
        }).pipe(catchError(error => {
            console.error('Login failed:', error);
            return error;
        })).subscribe(response => {
            localStorage.setItem('token', response.access);
            localStorage.setItem('refresh_token', response.refresh);

            this.router.navigate(['']).then(r => r);
            return response;
        });
    }


    isAuthenticated(): boolean{
        if(!localStorage.getItem('token')){
            return false;
        }
        return !this.isTokenExpired(localStorage.getItem('token'));
    }
    decodeToken(token: string): JwtPayload {
        return jwtDecode<JwtPayload>(token);
    }
    isTokenExpired(token: string): boolean {
        const decoded = this.decodeToken(token);
        const expirationDate = new Date(0);
        expirationDate.setUTCSeconds(decoded.exp);

         return expirationDate < new Date();
    }

    public getHeaders(): HttpHeaders {
        if (!this.isAuthenticated()) {
            this.router.navigate(['/auth/login']).then(r => r);
            return new HttpHeaders();
        }

        const token = localStorage.getItem('token');
        if (token) {
            return new HttpHeaders({
                'Authorization': 'Bearer ' + token
            });
        } else {
            return new HttpHeaders();
        }
    }

}
