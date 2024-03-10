import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'apicall', component: ApiCallComponent, canActivate: [AuthGuard] },
    { path: 'heroes', component: HeroesComponent }
];
