import { SharedModule } from './../shared/shared.module';
import { PlanetsComponent } from './planets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
  },
];

@NgModule({
  declarations: [PlanetsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class PlanetsModule {}
