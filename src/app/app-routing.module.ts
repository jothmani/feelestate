import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'form',component:FormComponent},
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: '**',redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,DashboardComponent,FormComponent,AboutComponent];
