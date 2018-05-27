import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeComponent } from './components/me/me.component';
import { DevComponent } from './components/dev/dev.component';
import { PineappleComponent } from "./components/pineapple/pineapple.component";
import { LostComponent } from "./components/lost/lost.component";

const routes: Routes = [
    { path: '', redirectTo: 'blueberry', pathMatch: 'full' },
    { path: 'blueberry', component: MeComponent },
    { path: 'dev', component: DevComponent },
    { path: 'pineapple', component: PineappleComponent },
    { path: '**', component: LostComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash:true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}