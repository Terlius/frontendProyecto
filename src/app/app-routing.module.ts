import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './publico/inicio/inicio.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent

  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(n => n.SeguridadModule),
  },
  {
    path: "ventas",
    loadChildren: () => import("./modulos/ventas/ventas.module").then(n => n.VentasModule),
  },
  {
    path: "reportes",
    loadChildren: () => import("./modulos/reportes/reportes.module").then(n => n.ReportesModule),
  },
  {
    path: "parametros",
    loadChildren: () => import("./modulos/parametros/parametros.module").then(n => n.ParametrosModule),
  },

  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"

  },

  {
    path: "**",
    component: RutaNoEncontradaComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
