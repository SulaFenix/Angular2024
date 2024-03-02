import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemProdutosComponent {
  valorInput: string = ''

}
