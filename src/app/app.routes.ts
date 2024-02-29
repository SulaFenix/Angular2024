import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemUsuariosComponent } from './pages/usuarios/listagem/listagem.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem/listagem.component';
import { CadastroEdicaoComponent } from './pages/produtos/cadastro-edicao/cadastro-edicao.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios', component: ListagemUsuariosComponent },
  { path: 'cadastroUsuario', component: CadastroEdicaoComponent},
  { path: 'produtos', component: ListagemProdutosComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
