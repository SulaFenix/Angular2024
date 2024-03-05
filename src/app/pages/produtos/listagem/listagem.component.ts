import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IProduto } from '../../../interfaces/produto';
import { ProdutosService } from '../../../services/produtos.service';

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
  imports: [FormsModule, PageTitleComponent, CommonModule, RouterLink],
})
export class ListagemProdutosComponent {
  tituloDaPagina: string = 'Produtos';
  produtos: IProduto[] = [];

  constructor(private produtoService: ProdutosService) {}

  ngOnInit() {
    this.produtoService.buscarTodosProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
