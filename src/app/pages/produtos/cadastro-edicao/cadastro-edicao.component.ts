import ptBr from '@angular/common/locales/pt';
import { Component, DEFAULT_CURRENCY_CODE } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProdutosService } from '../../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from '../../../interfaces/produto';
import Swal from 'sweetalert2';
import { NgxMaskDirective } from 'ngx-mask';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(ptBr);

@Component({
  selector: 'app-cadastro-edicao',
  standalone: true,
  imports: [ReactiveFormsModule, PageTitleComponent, CommonModule, NgxMaskDirective],
  templateUrl: './cadastro-edicao.component.html',
  styleUrl: './cadastro-edicao.component.css',
  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ]
})

export class CadastroEdicaoProdutosComponent {

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  produtoForm = new FormGroup({
    nomeProduto: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    quantidade: new FormControl(0, Validators.required),
    preco: new FormControl(0, Validators.required),
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
            console.log(produto.preco);
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
