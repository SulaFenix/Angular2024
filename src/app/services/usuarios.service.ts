import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  api = 'http://localhost:3000/usuarios';

  buscarTodosUsuarios() {
    return this.http.get<IUsuario[]>(this.api);
  }

  cadastrarEditarUsuario(usuario: IUsuario) {
    if (usuario.id) {
      return this.http.put(`${this.api}/${usuario.id}`, usuario);
    }
    return this.http.post(this.api, usuario);
  }

  romoverUsuario(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  buscarusuarioPorId(id: number) {
    return this.http.get<IUsuario>(`${this.api}/${id}`);
  }
}
