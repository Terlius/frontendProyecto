import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { MD5 } from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indentificacion-usuario',
  templateUrl: './indentificacion-usuario.component.html',
  styleUrls: ['./indentificacion-usuario.component.css']
})
export class IndentificacionUsuarioComponent {

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
    
  ) {

  }
  ngOnInit() {
    this.construirFormulario();
  }

  construirFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]]


    });
  }

  indentificarUsuario() {
    if (this.fGroup.invalid) {
      alert("Formulario invalido");
    } else {

      let correo = this.obtenerFormGroup['usuario'].value;
      let clave = this.obtenerFormGroup['clave'].value;
      let claveCifrada = MD5(clave).toString();
      console.log(claveCifrada);
      this.servicioSeguridad.indentificarusuario(correo, claveCifrada).subscribe({
        next: (data: UsuarioModel) => {
          console.log(data);
          this.router.navigate(['/seguridad/identificacion-two-factor']);
          
        },
        error: (error) => { console.log(error) }
      }); 

    }
  }

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }

}
