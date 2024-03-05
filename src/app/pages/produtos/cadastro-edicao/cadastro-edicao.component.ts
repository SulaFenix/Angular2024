import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-edicao',
  standalone: true,
  imports: [ReactiveFormsModule, PageTitleComponent, CommonModule],
  templateUrl: './cadastro-edicao.component.html',
  styleUrl: './cadastro-edicao.component.css'
})

export class CadastroEdicaoProdutosComponent {

  produtoForm = new FormGroup({
    nomeProduto: new FormControl('', Validators.required),
    codigoBarras: new FormControl(),
    quantidade: new FormControl(),
    preco: new FormControl()
  });

  id: number = 0;

  cadastrarEditarProdutos(){
    
  }
}
