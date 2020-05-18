# PI-API

Este projeto foi feito para colocar em prática o conteúdo de sequelize visto no curso de Desenvolvimento FullStack da DH, utilizando o Projeto Integrador (PI) como tema.

## Pré-requistos

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Tecnologias

- [dotenv](https://github.com/motdotla/dotenv)
- [express](https://github.com/expressjs/express)
- [mysql2](https://github.com/sidorares/node-mysql2)
- [sequelize](https://github.com/sequelize/sequelize)

## Como utilizar

1. Clone o projeto
2. Entre na pasta
3. Rode o comando `yarn` para instalar as dependências
4. Crie um aquivo chamado `.env`
5. Copie o conteúdo do arquivo `.env.example` para o arquivo criado no passo 4
6. Defina suas credências no `.env`
7. Rode o comando `yarn sequelize db:create` para criar o banco
8. Rode o comando `yarn sequelize db:migrate` para executar as migrations
9. Rode o comando `yarn dev` para iniciar o server

## Todo

- [ ] Implementar o controller de Usuário
- [ ] Implementar o controller de Pet
