import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cadastro-edicao',
    standalone: true,
    templateUrl: './cadastro-edicao.component.html',
    styleUrl: './cadastro-edicao.component.css',
    imports: [ReactiveFormsModule, PageTitleComponent, CommonModule]
})
export class CadastroEdicaoUsuariosComponent {
  usuarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl()
  })

}
