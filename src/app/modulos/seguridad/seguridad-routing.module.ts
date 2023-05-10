import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndentificacionUsuarioComponent } from './indentificacion-usuario/indentificacion-usuario.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionTwoFactorComponent } from './identificacion-two-factor/identificacion-two-factor.component';

const routes: Routes = [
  {
    path: "identificar-usuario",
    component: IndentificacionUsuarioComponent
    
   },
   {
    path: "cambio-clave",
    component: CambioClaveComponent
    
   },
   {
    path: "recuperar-clave",
    component: RecuperarClaveComponent
    
   },
   {
    path: "recuperar-clave",
    component: RecuperarClaveComponent
    
   },
   {
    path: "cerrar-sesion",
    component: CerrarSesionComponent
    
   },
   {
    path: "identificacion-two-factor",
    component: IdentificacionTwoFactorComponent
    
   }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
