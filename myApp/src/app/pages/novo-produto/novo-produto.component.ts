import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.scss'],
  standalone: false
})
export class NovoProdutoComponent implements OnInit {
  constructor(private readonly router: Router) { }

  produto = {
    id: this.gerarIdUnico(),
    nome: '',
    preco: null as number | null,
    descricao: ''
  };

  salvarProduto() {
    if (!this.produto.nome || !this.produto.preco) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const produtosSalvos = localStorage.getItem('produtos');
    let produtos = produtosSalvos ? JSON.parse(produtosSalvos) : [];
    produtos.push(this.produto);

    localStorage.setItem('produtos', JSON.stringify(produtos));
    alert('Produto salvo com sucesso!');
    this.router.navigate(['/lista-produtos']);
  }
  ngOnInit() {
    console.log('NovoProdutoComponent initialized');
  }

  private gerarIdUnico(): number {
    return Date.now();
  }
}