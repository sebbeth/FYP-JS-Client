import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent }      from './landing/landing.component';
import { HomeComponent }      from './home/home.component';
import { NewComponent }      from './new/new.component';
import {ConceptComponent } from './concept/concept.component';

const routes: Routes = [

  { path: 'start', component: LandingComponent },
  { path: '', component: HomeComponent},
  { path: 'new', component: NewComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
