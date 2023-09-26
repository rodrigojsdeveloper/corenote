<div align="center">
<h1>Corelab Challenge</h1>
<p>
CoreNote é um aplicativo da web que possibilita aos usuários a criação e administração de suas próprias listas de tarefas. O aplicativo compreende uma página da web responsiva com funcionalidades avançadas, complementada por uma API robusta para armazenamento e gerenciamento eficaz das listas de tarefas.
</p>
</div>

<br/>

## Tecnologias

Seguintes ferramentas foram usadas neste projeto:

Front-end:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router DOM](https://reactrouter.com/en/main/)
- [Helmet](https://github.com/nfl/react-helmet/)
- [Yup](https://github.com/jquense/yup/)
- [Vite](https://vitejs.dev/)

Back-end:

- [Nodejs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Swagger](https://swagger.io/)

<br />

## Instalação do Projeto

Projeto desenvolvido no backend com Node e no frontend com React.

### 1. Instalação das dependencias

Execute a instalação das dependências executando `yarn` nas pastas "client" e "server".

### 2. Configuração do .env

Crie um arquivo `.env` com base no arquivo `.env.example` na pasta "server".

#### Para sistemas Linux, você pode usar o seguinte comando:

```
cp .env.example .env
```

### 3. Iniciando o Projeto

Iniciando o Backend (Server)

No diretório "server," execute o seguinte comando:

```
yarn dev
```

Em seguida, faça uma requisição usando o Insomnia ou outra ferramenta similar.

#### Exemplo de requisição - POST

```
{
  "title": "John doe",
  "description": "Lorem Ipsum.",
  "is_favorite": false,
  "color": "#FFFFFF"
}
```

Iniciando o Frontend (Client)

No diretório "client," execute o seguinte comando:

```
yarn dev
```

Em seguida, abra o projeto em seu navegador.

Acesse o projeto em:

#### Link do projeto

```
http://localhost:5173
```

### 3. Iniciando o Projeto no Docker-Compose

Primeiro, navegue até a pasta "server" e edite o arquivo .env da seguinte forma:

```
POSTGRES_HOST=localhost

POSTGRES_HOST=postgres
```

Agora na raiz do projeto rode o comando:

### Para Windows

```
docker-compose up -d
```

### Para Linux

```
sudo docker-compose up -d
```

A flag -d executa o projeto em segundo plano, liberando o terminal para outros usos.

### 4. Documentação

Com o projeto em execução, acesse http://localhost:3000/api/docs para visualizar a documentação.

<br/>
<p align="center">Feito por <a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/">Rodrigo Silva</a></p>
