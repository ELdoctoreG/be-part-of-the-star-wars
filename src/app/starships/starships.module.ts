import { SharedModule } from './../shared/shared.module';
import { StarshipsComponent } from './starships.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StarshipsComponent,
  },
];

@NgModule({
  declarations: [StarshipsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class StarshipsModule {}
