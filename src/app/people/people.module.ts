import { SharedModule } from './../shared/shared.module';
import { PeopleComponent } from './people.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
  },
];

@NgModule({
  declarations: [PeopleComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class PeopleModule {}
