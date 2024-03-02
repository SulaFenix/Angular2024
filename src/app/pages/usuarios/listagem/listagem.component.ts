import { Component, ViewEncapsulation } from '@angular/core';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../../../interfaces/usuario';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem-usuarios',
  standalone: true,
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
  //encapsulation: ViewEncapsulation.None
  imports: [PageTitleComponent, CommonModule, RouterLink],
  providers: [UsuariosService],
})
export class ListagemUsuariosComponent {
  tituloDaPagina: string = 'Usuários';
  usuarios: IUsuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.buscarTodosUsuarios().subscribe((usuarios) => {
      //console.log(usuarios);
      this.usuarios = usuarios;
    }, error=> {
      console.error(error);
    });
  }
}
