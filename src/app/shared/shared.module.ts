import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CommonModule,
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent],
  providers: [],
})
export class SharedModule {}
