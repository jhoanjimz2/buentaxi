import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarTaxiPage } from './solicitar-taxi.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarTaxiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarTaxiPageRoutingModule {}
