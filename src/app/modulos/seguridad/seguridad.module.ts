import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IndentificacionUsuarioComponent } from './indentificacion-usuario/indentificacion-usuario.component';
import { IdentificacionTwoFactorComponent } from './identificacion-two-factor/identificacion-two-factor.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';

import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndentificacionUsuarioComponent,
    IdentificacionTwoFactorComponent,
    RecuperarClaveComponent,
    CambioClaveComponent,
   
    ListarUsuarioComponent,
    EliminarUsuarioComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SeguridadModule { }
