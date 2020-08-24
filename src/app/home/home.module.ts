import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
