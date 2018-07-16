import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent }      from './landing/landing.component';
import {ConceptComponent } from './concept/concept.component';

const routes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'concept', component ConceptComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
