import { SharedModule } from './../shared/shared.module';
import { SpeciesComponent } from './species.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SpeciesComponent,
  },
];

@NgModule({
  declarations: [SpeciesComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class SpeciesModule {}
