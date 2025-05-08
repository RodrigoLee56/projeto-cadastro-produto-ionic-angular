import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})


export class LoginComponent implements OnInit {

  usuario: string = '';
  senha: string = '';

  constructor(private readonly router: Router) { }

  entrar() {
    console.log('Usuário:', this.usuario);
    console.log('Senha:', this.senha);

    if (this.usuario === 'admin' && this.senha === '123456') {
      alert('Login bem-sucedido!');
      this.router.navigate(['/lista-produtos']);
    } else {
      alert('Credenciais inválidas.');
    }
  }

  ngOnInit() {
    console.log('LoginComponent initialized');
  }

}

