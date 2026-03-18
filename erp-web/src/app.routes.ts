import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import {AppComponent} from "@/app.component";
import {AddressTypeGridComponent} from "@/app/features/master-data/address-type/address-type-grid/address-type-grid.component";
import {
    AddressTypePageComponent
} from "@/app/features/master-data/address-type/address-type-page/address-type-page.component";

export const appRoutes: Routes = [
    {path: '', component: AddressTypePageComponent},
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
