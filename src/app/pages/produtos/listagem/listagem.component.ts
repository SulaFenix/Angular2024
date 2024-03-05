import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IProduto } from '../../../interfaces/produto';
import { ProdutosService } from '../../../services/produtos.service';
import Swal from 'sweetalert2';

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

  removerProduto(id: number) {
    console.log(id);
    if (id) {
      this.exibirConfirmacao(id);
    }
  }

  exibirConfirmacao(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Não tem como desfazer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, remova',
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.removerProduto(id).subscribe(
          (result) => {
            this.produtos.filter((produtoLista) => produtoLista.id != id);
            Swal.fire({
              title: 'Removido!',
              text: 'Seu produto foi removido',
              icon: 'success',
            });
            this.produtos = this.produtos.filter((produto) => produto.id != id);
          },
          (erro) => {
            console.error(erro);
          }
        );
      }
    });
  }
}
