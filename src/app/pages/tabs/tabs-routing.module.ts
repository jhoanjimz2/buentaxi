import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'cotizar',
        loadChildren: () => import('../cotizar/cotizar.module').then( m => m.CotizarPageModule)
      },
      {
        path: 'nuevo-viaje',
        loadChildren: () => import('../nuevo-viaje/nuevo-viaje.module').then(m => m.NuevoViajePageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('../ajustes/ajustes.module').then( m => m.AjustesPageModule)
      },
      {
        path: '',
        redirectTo: 'nuevo-viaje',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
