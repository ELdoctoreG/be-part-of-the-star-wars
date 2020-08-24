import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MoviesComponent],
  exports: [],
  providers: [],
})
export class MoviesModule {}
