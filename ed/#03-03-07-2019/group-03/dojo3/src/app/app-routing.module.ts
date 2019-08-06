import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Problema3Component } from './components/problema3.component/problema3.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'problema3' },
  { path: 'problema3', component: Problema3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
