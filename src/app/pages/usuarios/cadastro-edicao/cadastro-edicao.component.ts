import { UsuariosService } from './../../../services/usuarios.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";
import { CommonModule } from '@angular/common';
import { IUsuario } from '../../../interfaces/usuario';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-cadastro-edicao',
    standalone: true,
    templateUrl: './cadastro-edicao.component.html',
    styleUrl: './cadastro-edicao.component.css',
    imports: [ReactiveFormsModule, PageTitleComponent, CommonModule]
})
export class CadastroEdicaoUsuariosComponent {

  constructor(private usuariosService: UsuariosService, private router: Router, private route: ActivatedRoute){ }

  usuarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl()
  })

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
  }

  cadastrarUsuarios(){
    console.log(this.usuarioForm.value);
    const usuario: IUsuario = this.usuarioForm.value as IUsuario;
    usuario.ativo = true;
    this.usuariosService.cadastrarUsuario(usuario).subscribe((result) =>
    {
      console.log(result);
      Swal.fire({
        title: "Parabéns",
        text: "Usuário cadastrado com sucesso!",
        icon: "success"
      });
      this.router.navigateByUrl('/usuarios');
    }, erro => {
      console.error(erro);
    });
  }

}
