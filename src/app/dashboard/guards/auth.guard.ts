import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    private authService = inject(AuthService);
    private router = inject(Router);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isLoggedIn: boolean = this.authService.isLoggedIn();
        console.trace('AuthGuard#canActivate called', isLoggedIn);

        if (isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/auth/login']).then(r => r);
            return false;
        }
    }
}
