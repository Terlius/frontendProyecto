import { Injectable } from '@angular/core';
import { UsuarioModel } from '../modelos/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionRutasBackend } from '../config/config.rutas';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url_backend_segurdad: string = ConfiguracionRutasBackend.URL_BACKEND_SEGURIDAD;

  constructor(
    private http: HttpClient) { }

  indentificarusuario(correo: string, clave: string): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.url_backend_segurdad}identificar-usuario`,
      {
        correo: correo,
        clave: clave
      });

  }
}
