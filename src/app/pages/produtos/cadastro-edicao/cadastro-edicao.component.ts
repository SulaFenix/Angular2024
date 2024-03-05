import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { ProdutosService } from '../../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from '../../../interfaces/produto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-edicao',
  standalone: true,
  imports: [ReactiveFormsModule, PageTitleComponent, CommonModule],
  templateUrl: './cadastro-edicao.component.html',
  styleUrl: './cadastro-edicao.component.css',
})

export class CadastroEdicaoProdutosComponent {

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  produtoForm = new FormGroup({
    nomeProduto: new FormControl('', Validators.required),
    codigoBarras: new FormControl(),
    quantidade: new FormControl(),
    preco: new FormControl(),
  });

  id: number = 0;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    try {
      const idNumber = Number(id);

      if (idNumber) {
        this.id = idNumber;
        this.produtosService
          .buscarProdutoPorId(idNumber)
          .subscribe((produto) => {
            this.produtoForm.patchValue({
              nomeProduto: produto.nomeProduto,
              codigoBarras: produto.codigoBarras,
              quantidade: produto.quantidade,
              preco: produto.preco,
            });
          });
      }
    } catch (error) {
      console.error(error);
    }
  }

  cadastrarEditarProdutos() {
    const produto: IProduto = this.produtoForm.value as IProduto;

    if (this.id) {
      produto.id = this.id;
    }

    this.produtosService.cadastrarEditarProduto(produto).subscribe(
      (result) => {
        Swal.fire({
          title: 'Parabéns',
          text: `Produto ${this.id ? 'editado' : 'cadastrado'} com sucesso!`,
          icon: 'success',
        });
        this.router.navigateByUrl('/produtos');
      },
      (erro) => {
        console.error(erro);
      }
    );
  }
}
