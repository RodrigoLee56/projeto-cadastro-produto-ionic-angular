# 📱 Cadastro de Produtos com Ionic + Angular

> Projeto desenvolvido conforme a **Aula 05 - Criação de Interface com Ionic e Angular**, ministrada pelo Professor João Marcos Aires Duarte.

Este é um aplicativo móvel simples para **cadastro e exibição de produtos**, criado com **Ionic Framework** e **Angular**, com navegação entre telas e persistência local usando `localStorage`.

---

## 📋 Sumário

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Telas do Aplicativo](#telas-do-aplicativo)
- [Persistência de Dados](#persistência-de-dados)
- [Referência - Aula 05](#aula-05---criação-de-interface-com-ionic-e-angular)

---

## 📝 Sobre

Este projeto foi desenvolvido como parte do conteúdo da **Aula 05 - Criação de Interface com Ionic e Angular**, onde aprendemos a:

- Criar interfaces responsivas com o Ionic.
- Implementar navegação entre telas com Angular.
- Usar o `localStorage` para armazenar dados localmente.
- Estruturar um projeto com componentes e rotas.

O foco está na criação de uma interface intuitiva e funcional para cadastro e visualização de produtos, sem backend.

---

## ✅ Funcionalidades

| Funcionalidade | Descrição |
|---------------|-----------|
| 🔐 Login      | Tela inicial com validação simples (`admin` / `123456`) |
| 📦 Novo Produto | Formulário para cadastrar novos produtos: nome, preço e descrição |
| 📋 Lista de Produtos | Exibe todos os produtos cadastrados |
| 💾 Persistência Local | Os dados são salvos no `localStorage` |

---

## ⚙️ Tecnologias Utilizadas

- **[Ionic Framework](https://ionicframework.com/)** – Para criar a interface mobile
- **[Angular](https://angular.io/)** – Para navegação e lógica do front-end
- **TypeScript** – Linguagem principal do projeto
- **HTML / SCSS** – Estrutura e estilização das telas
- **LocalStorage** – Simulação de persistência de dados

---

## 📁 Estrutura do Projeto

```text
src/
├── app/
│ ├── pages/
│ │ ├── login/ # Tela de login
│ │ ├── novo-produto/ # Formulário de cadastro
│ │ └── lista-produtos/ # Lista dos produtos cadastrados
│ ├── app-routing.module.ts # Rotas do aplicativo
│ └── app.module.ts # Módulo raiz do projeto
│
├── assets/ # Pasta para recursos estáticos
└── theme/ # Estilos globais do projeto
```
---

## 🧪 Como Executar

### Requisitos

- Node.js (v16 ou superior)
- Ionic CLI instalado (`npm install -g @ionic/cli`)
- Angular CLI (opcional)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/RodrigoLee56/cadastro-produtos-ionic-angular.git

2. Instale as dependências:
    `npm install`

3. Execute o servidor local:
    `ionic serve`

4. Acesse no navegador:
    http://localhost:8100/login

5. Use as credenciais abaixo para testar:
  - Usuário: admin
  - Senha: 123456

## 🖥️ Telas do Aplicativo
### 1. Login
  - Validação simples com usuário e senha.
  - Redireciona para a tela de lista após autenticação.

### 2. Novo Produto
  - Campos: Nome, Preço e Descrição.
  - Salva os dados no localStorage.

### 3. Lista de Produtos
  - Exibe os produtos cadastrados com:
    - Nome
    - Preço
    - Descrição

## 💾 Persistência de Dados
Os dados dos produtos são armazenados localmente através do localStorage, incluindo:

  - ID único (gerado com Date.now())
  - Nome do produto
  - Preço
  - Descrição

## 📘 Aula 05 - Criação de Interface com Ionic e Angular
Este projeto se baseia nos conhecimentos adquiridos na Aula 05 , com os seguintes tópicos abordados:

### Configuração do Ambiente
- Instalar Node.js
- Instalar Ionic CLI (npm install -g @ionic/cli)
- Criar projeto com template sidemenu:

    `ionic start myApp sidemenu`

### Estrutura do Projeto
  - Pasta src/app – Componentes e módulos principais
  - Pasta src/assets – Armazena recursos estáticos
  - Pasta src/theme – Estilos globais do projeto


### Criação de Componentes
  - Comando usado:
      `ionic generate component nome-componente`
  - Uso de elementos do Ionic: ion-card, ion-button, etc.
  - Estilização com SCSS

### Testando o Aplicativo
  - Servidor local:
    `ionic serve`
  
  - Teste em dispositivos Android:
    `ionic cordova run android`
