import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {AuthGuard} from "./dashboard/guards/auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'auth',
                loadChildren: () => import('./dashboard/components/auth/auth.module').then(m => m.AuthModule)
            },

            {
                path: '', component: AppLayoutComponent,
                children: [
                    {
                        canActivate: [AuthGuard],
                        path: '',
                        loadChildren: () => import('./dashboard/components/docker/docker.module'
                        ).then(m => m.DockerModule),
                    }
                ]
            },

            {path: 'notfound', component: NotfoundComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
