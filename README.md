# Projeto de Gerenciamento de Tickets

Este é um projeto de gerenciamento de tickets utilizando NestJS no backend e Vue.js no frontend. Este projeto utiliza Docker para facilitar o desenvolvimento e a execução na arquitetura monorepo.

## Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/) devem estar instalados.

## Estrutura do Projeto

```
/project-root
│
├── /client              # Código fonte do frontend (Vue)
│
├── /server              # Código fonte do backend (NestJS)
│
├── docker-compose.yml    # Arquivo de configuração do Docker Compose
```

## Executando o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/soares-grs/tickets.git
   cd tickets
   ```

2. **Construir e iniciar os contêineres:**

   Execute o seguinte comando na raiz do projeto:

   ```bash
   docker-compose up --build
   ```

3. **Acessar a aplicação:**

   - **Frontend:** Acesse [http://localhost:5173](http://localhost:5173)
   - **Backend:** Acesse [http://localhost:3000](http://localhost:3000) (se necessário para teste de API)

4. **Parar os contêineres:**

   Para parar os contêineres em execução, pressione `CTRL+C` no terminal onde o `docker-compose` está rodando ou execute:

   ```bash
   docker-compose down
   ```
   