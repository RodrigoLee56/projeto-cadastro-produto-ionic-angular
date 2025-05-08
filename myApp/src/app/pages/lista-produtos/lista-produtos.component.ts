import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
  standalone: false
})
export class ListaProdutosComponent implements OnInit {

  produtos: { nome: string; preco: number; descricao: string; }[] = [];

  constructor() { }

  ngOnInit() {
    const produtosSalvos = localStorage.getItem('produtos');
    if (produtosSalvos) {
      this.produtos = JSON.parse(produtosSalvos);
    }
  }

}
