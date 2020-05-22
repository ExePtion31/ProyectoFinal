import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule), canActivate : [NologinGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/home/registro/registro.module').then( m => m.RegistroPageModule), canActivate : [NologinGuard]
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./paginas/home/ingresar/ingresar.module').then( m => m.IngresarPageModule), canActivate : [NologinGuard]
  },
  {
    path: 'administrador',
    loadChildren: () => import('./paginas/administrador/administrador.module').then( m => m.AdministradorPageModule), canActivate : [AuthGuard] 
  },
  {
    path: 'modificar',
    loadChildren: () => import('./Paginas/administrador/modificar/modificar.module').then( m => m.ModificarPageModule), canActivate : [AuthGuard] 
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./Paginas/administrador/eliminar/eliminar.module').then( m => m.EliminarPageModule), canActivate : [AuthGuard] 
  },
  {
    path: 'carga/:IDuser',
    loadChildren: () => import('./Paginas/carga/carga.module').then( m => m.CargaPageModule), canActivate : [AuthGuard] 
  },
  {
    path: 'estudiante/:EnviaNombre/:EnviaApellido/:EnviaCorreo/:EnviaDocumento/:EnviaCarrera/:EnviaRango',
    loadChildren: () => import('./paginas/estudiante/estudiante.module').then( m => m.EstudiantePageModule), canActivate : [AuthGuard] 
  },
  {
    path: 'cargaadmin/:nombre/:apellido/:carrera/:documento/:email/:password/:rango',
    loadChildren: () => import('./Paginas/administrador/carga/carga.module').then( m => m.CargaPageModule), canActivate : [AuthGuard] 
  },
  {
    path: 'cargamodificar/:id/:nombre/:apellido/:carrera/:documento/:rango',
    loadChildren: () => import('./Paginas/administrador/modificar/carga/carga.module').then( m => m.CargaPageModule), canActivate : [AuthGuard] 
  },
  {
    path: 'cargaeliminar/:id',
    loadChildren: () => import('./Paginas/administrador/eliminar/carga/carga.module').then( m => m.CargaPageModule), canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
