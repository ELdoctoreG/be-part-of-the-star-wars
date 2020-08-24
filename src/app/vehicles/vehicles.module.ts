import { SharedModule } from './../shared/shared.module';
import { VehiclesComponent } from './vehicles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
  },
];

@NgModule({
  declarations: [VehiclesComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class VehiclesModule {}
