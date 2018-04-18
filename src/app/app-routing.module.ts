import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeComponent } from './components/me/me.component';
import { DevComponent } from './components/dev/dev.component';

const routes: Routes = [
    { path: '', redirectTo: 'me', pathMatch: 'full' },
    { path: 'me', component: MeComponent },
    { path: 'dev', component: DevComponent },
    { path: '**', redirectTo: 'me'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash:true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}