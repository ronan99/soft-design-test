# DESAFIO VAGA FULLSTACK PHP

## Objetivo:
Criar uma aplicação web em PHP com acesso restrito, que exiba uma listagem de livros com as opções de ver os detalhes, editar, deletar e criar um livro, e também exiba o clima atual da sua região.

O prazo para realização do teste é de 5 dias. Após o término da prova, colocar o código em algum repositório público (github, gitlab, bitbucket.. ) e então informar nas respostas o caminho onde está a prova para avaliação respondendo o email.

## Funcionalidades:

### 1) Tela de Login
- A tela inicial deve ser a de login;
- Não deve ser possível acessar outras telas sem realizar o login;

### 2) CRUD de Livros
- Listagem de livros com paginação e filtragem;
- Adição e Edição de Livros;
  - Dados do Livro
    - Título;
    - Descrição;
    - Autor;
    - Número de Páginas;
    - Data de Cadastro;
- Exclusão de um livro.

### 3) Clima da região
- Integração com API externa para exibir o clima de uma determinada região;
- Mostrar apenas o Clima atual.
  - API [https://hgbrasil.com/status/weather](https://hgbrasil.com/status/weather). Consultar documentação [https://console.hgbrasil.com/documentation/weather](https://console.hgbrasil.com/documentation/weather).


### Como Rodar:

Este README fornece instruções para configurar e executar o projeto Angular em conjunto com o PHP usando Docker.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Git
- Docker
- Docker Compose
- Node.js (npm)

## Instruções para Execução

### 1. Clone o Repositório

```bash
git clone <url-do-repo>
cd nome-do-repo
```

### 2. Instale as Dependências do Frontend
Na pasta do frontend, execute:

```bash
npm install
```

### 3. Configuração do Docker
Na raiz do projeto, execute:

```bash
docker-compose build
docker-compose up -d
```

### 4. Migration
Entre no container do backend e execute as migrations

```
docker exec -it backend_yii bash
php yii migrate
```

**Nota: Trocar bash pelo GNU utilizado, seja ele BASH ou SH, etc.**

### 5. Acesse o Frontend
   Abra o navegador e acesse:

   [http://localhost:4200](http://localhost:4200)

### 6. Acesse o Backend
   Para acessar o backend, abra o navegador e vá para:

   [http://localhost:8080](http://localhost:8080)

### 7. Credenciais de Acesso
   - **Usuário Padrão:**
     - E-mail: admin@test.com
     - Senha: 123456789

### Observação:

**Caso a chave de consulta de clima não exceda o limite de requisições, acessar [https://hgbrasil.com/status/weather](https://hgbrasil.com/status/weather), Criar uma nova chave e trocar no arquivo:**

[src/app/shared/config.ts](https://github.com/ronan99/soft-design-test/blob/feat/crud-book/frontend/src/app/shared/config.ts)