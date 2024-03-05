import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  api = 'http://localhost:3000/produtos';

  buscarTodosProdutos(){
    return this.http.get<IProduto[]>(this.api);
  }
}
