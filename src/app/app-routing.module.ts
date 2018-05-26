import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartStoragespaceComponent } from './components/chart-storagespace/chart-storagespace.component';

const routes: Routes = [
  {path:'storagespace',component:ChartStoragespaceComponent},
  {path: '',redirectTo: '/storagespace',pathMatch: 'full'},
  {path: '**',redirectTo: '/storagespace',pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ChartStoragespaceComponent];

