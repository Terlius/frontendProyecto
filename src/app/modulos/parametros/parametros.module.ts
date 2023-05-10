import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';


@NgModule({
  declarations: [
    EliminarClienteComponent,
    EditarClienteComponent,
    CrearClienteComponent,
    CrearProductoComponent,
    EliminarProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
