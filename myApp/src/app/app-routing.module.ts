import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'novo-produto',
    loadChildren: () => import('./pages/novo-produto/novo-produto.module').then(m => m.NovoProdutoModule)
  },
  {
    path: 'lista-produtos',
    loadChildren: () => import('./pages/lista-produtos/lista-produtos.module').then(m => m.ListaProdutosModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
