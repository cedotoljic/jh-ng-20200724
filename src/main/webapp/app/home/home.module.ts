import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhng20200724SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhng20200724SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Jhng20200724HomeModule {}
