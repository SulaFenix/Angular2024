import { Component, ViewEncapsulation } from '@angular/core';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../../../interfaces/usuario';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

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

  removerUsuario(id: number){
    if(id){
      this.exibirConfirmacao(id);
    }
  }

  exibirConfirmacao(id: number){
    Swal.fire({
      title: "Tem certeza?",
      text: "Não tem como desfazer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, remova"
    }).then((result) => {
      if (result.isConfirmed){
        this.usuariosService.romoverUsuario(id).subscribe(result => {
          this.usuarios.filter(usuarioLista => usuarioLista.id != id)
          Swal.fire({
            title: "Removido!",
            text: "Seu usuário foi removido",
            icon: "success"
          });
          this.usuarios = this.usuarios.filter(usuario => usuario.id != id);
        }, erro => {
          console.error(erro);
        });
      }
    });
  }
}
