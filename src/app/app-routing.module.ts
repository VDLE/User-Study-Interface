import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemographicsComponent } from './demographics/demographics.component';
import { SetupPageComponent } from './setup-page/setup-page.component';

const routes: Routes = [
  {path: 'setup' , component: SetupPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
