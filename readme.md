Olá, se você recebeu esse teste é porque gostamos do seu perfil, e está a poucos 
passos de fazer parte do nosso time!

Gostaríamos que você participasse desse desafio para que possamos testar suas habilidades técnicas, então bora lá!

# Teste Full-Stack Nex Digital
Este teste busca analisar as capacidades técnicas para a vaga de Desenvolvedor Full-Stack.

## Desafio
Você deverá desenvolver uma aplicação que consiste em: um banco de dados (PostgreSQL), uma API (Node.js + Sequelize.js) e o Front-end (React.js). 

Na aplicação, um usuário deverá se cadastrar utilizando nome, e-mail e senha e se autenticar na 
aplicação utilizando JWT. Já na home, o backend deve retornar para o usuário  uma lista de produtos que apenas um usuário autenticado pode acessar.

## Pré-Requisitos

- Front-End - React.js
- API - Node.js + sequelize.js
- Banco de dados - PostgreSQL

## O que será avaliado

- Organização geral do código
- Padronização de nomes de variáveis/funções
- Performance e segurança do código
- Utilização correta de git

## Diferencial

- Manter o código limpo e em inglês 
- Utilizar princípios SOLID
- Agilidade
- Código maciço com bons tratamentos de erros e bugs

## Instruções para executar o projeto
1. Clone o repositório: <code>git clone https://github.com/lmrissi/Desafio-Full-Stack-Nex-Api.git</code>
2. Instale as dependências: <code>npm i</code>
3. Suba o docker para criar o banco de dados: <code>docker-compose up -d</code>
4. Crie o arquivo .env com as variáveis de ambiente
5. Crie as tabelas no banco de dados: <code>npx sequelize-cli db:migrate</code>
6. Suba o servidor: <code>npm run dev</code>

## Endpoints disponíveis na API
1. <code>/user</code>: 
    Enpoint para criação de usuários, aceita o método POST.
    Retorna o usuário criado. 
    Passar o seguinte payload no body da requisição:
    <code>
    {
        "name": "nome do usuário",
        "email": "emaildousuario@provedor.com.br",
        "password": "senha do usuário"
    }
    </code>

2. <code>/login</code>: 
    Enpoint para autenticação de usuários, aceita o método POST.
    Retorna um token jwt e os dados do usuário.
    Passar o seguinte payload no body da requisição:
    <code>
    {
        "name": "nome do usuário",
        "password": "senha do usuário"
    }
    </code>

3. <code>/product</code>:
    Enpoint para criação de produto, aceita o método POST.
    Necessário passar o token da requisição nos headers na key Authorization.
    Retorna o produto criado.
    Passar o seguinte payload no body da requisição:
    <code>
    {
        "name": "nome do produto",
        "description": "descrição do produto",
        "price": preço do produto
    }
    </code>

3. <code>/products</code>: 
    Enpoint para listagem dos produtos de um usuário, aceita o método GET.
    Necessário passar o token da requisição nos headers na key Authorization.
    Retorna o produto criado.
