import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilTaxiPage } from './perfil-taxi.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilTaxiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilTaxiPageRoutingModule {}
