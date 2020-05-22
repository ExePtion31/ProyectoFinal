import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorPage } from './administrador.page';
import { AuthGuard } from "../../guards/auth.guard";
import { NologinGuard } from "../../guards/nologin.guard";

const routes: Routes = [
  {
    path: '',
    component: AdministradorPage
  },
  {
    path: 'modificar',
    loadChildren: () => import('../../Paginas/administrador/modificar/modificar.module').then( m => m.ModificarPageModule), canActivate : [AuthGuard, NologinGuard]
  },
  {
    path: 'eliminar',
    loadChildren: () => import('../../Paginas/administrador/eliminar/eliminar.module').then( m => m.EliminarPageModule), canActivate : [AuthGuard, NologinGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorPageRoutingModule {}
