# API, REST e RESTFUL
Uma API simples para gerenciar informações de clientes, construída com Node.js e Express.js. Este projeto tem como objetivo fornecer um panorama geral sobre o funcionamento de APIs RESTful, servindo como um primeiro passo antes de migrar para tecnologias como Spring Boot e Vue.js.

## Conceitos básicos
---

### API
Utilizada para comunicação entre Frontend e Backend, API é um acrônimo de Application Programming Interface (Interface de Programação de Aplicações). É basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar suas funcionalidades. 

Por exemplo, ao desenvolver um aplicativo que consome vídeos do YouTube, utiliza-se a API do YouTube para obter esses dados.

Em uma analogia, num restaurante, temos o cliente (client), que faz requisições ao garçom (API). O garçom leva essas requisições à cozinha (server) e retorna os pedidos para que o cliente consuma o que foi produzido.

Portanto, uma API estabelece a comunicação entre diferentes serviços, servindo como intermediário para a troca de informações.

### REST
REST é um estilo de arquitetura para criação de APIs que segue um conjunto de princípios e convenções para garantir escalabilidade, flexibilidade e facilidade de manutenção.

A transferência de dados geralmente é feita utilizando o protocolo HTTP. **REST** significa Representational State Transfer (Transferência de Estado Representativo). Ele define boas práticas para garantir a organização das trocas de informações.

### RESTFUL
Ser RESTFUL significa seguir as regras e padrões REST. Existem 6 princípios fundamentais para que uma API seja considerada RESTFUL:

- **_Client-Server_**: Separação entre cliente (frontend) e servidor (backend), permitindo evolução independente de ambos.
- **_Stateless_**: Cada requisição deve conter todas as informações necessárias para que o servidor possa processá-la sem depender de requisições anteriores.
- **_Cacheable_**: As respostas do servidor podem ser armazenadas em cache para melhorar desempenho e reduzir a carga no servidor.
- **_Layered System_**: A arquitetura pode ter múltiplas camadas (ex: load balancers, proxies), sem que o cliente precise saber disso.
- **_Code on demand (opcional)_**: Possibilidade de envio de código executável, como scripts JavaScript, para ser processado no cliente.
- **_Uniform Interface_**: As APIs RESTful devem ter uma interface uniforme, com recursos identificados por URIs, métodos HTTP padronizados e formatos de dados bem definidos (ex: JSON).

### Boas práticas

- **_Documentação_**: Criar uma documentação clara e completa da API, incluindo endpoints, métodos HTTP, parâmetros, formatos de dados e exemplos de uso. Ferramentas como o Swagger podem auxiliar.
- **_Versioning_**: Usar versionamento na API (ex: `/v1/`, `/v2/`) para evitar que mudanças quebrem aplicações que já a utilizam.
- **_Tratamento de erros_**: Implementar tratamento de erros robusto, retornando códigos HTTP apropriados e mensagens de erro claras.
- **_Segurança_**: Implementar autenticação e autorização para garantir que apenas usuários autorizados possam acessar os recursos.
- **_Testes_**: Criar testes automatizados para garantir a funcionalidade e evitar regressões.

### Verbos HTTP

- **_GET_**: Recupera um recurso ou lista de recursos. Exemplo:
  ```bash
  GET /clients       # Lista todos os clientes
  GET /clients/1     # Recupera o cliente com ID 1
  ```
- **_POST_**: Cria um novo recurso.
  ```bash
  POST /clients      # Cria um novo cliente
  ```
- **_PUT_**: Atualiza um recurso existente.
  ```bash
  PUT /clients/1     # Atualiza o cliente com ID 1
  ```
- **_DELETE_**: Deleta um recurso existente.
  ```bash
  DELETE /clients/1  # Deleta o cliente com ID 1
  ```

### Estrutura de requisição e resposta HTTP

- **_Requisição_**:
    - Método HTTP: (GET, POST, PUT, DELETE, etc.)
    - URL: (ex: `/clients`, `/clients/1`)
    - Cabeçalhos: (ex: `Content-Type: application/json`)
    - Corpo (opcional): (dados enviados para o servidor)
- **_Resposta_**:
    - Código de status: (ex: `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`)
    - Cabeçalhos: (ex: `Content-Type: application/json`)
    - Corpo (opcional): (dados retornados pelo servidor)

### Status das respostas

- **1XX**: Informação
- **2XX**: Sucesso
    - `200`: OK
    - `201`: CREATED
    - `204`: Sem conteúdo (usado para PUT, POST, DELETE)
- **3XX**: Redirecionamento
- **4XX**: Erro do cliente
    - `400`: Bad Request
    - `404`: Not Found
- **5XX**: Erro do servidor
    - `500`: Internal Server Error


 ## Tecnologias

*   Node.js
*   Express.js
*   JSON

## Endpoints da API

Abaixo estão os endpoints disponíveis nesta API:

| Método  | Endpoint         | Descrição                                   | Exemplo de Uso  |
|---------|-----------------|---------------------------------------------|----------------|
| **GET**     | `/clients`      | Retorna todos os clientes cadastrados      | `GET /clients` |
| **GET**     | `/clients/{id}` | Retorna um cliente específico pelo ID      | `GET /clients/1` |
| **POST**    | `/clients`      | Cria um novo cliente                       | `POST /clients` (Enviando JSON no corpo) |
| **PUT**     | `/clients/{id}` | Atualiza os dados de um cliente específico | `PUT /clients/1` (Enviando JSON no corpo) |
| **DELETE**  | `/clients/{id}` | Remove um cliente do banco de dados        | `DELETE /clients/1` |

Para testar esses endpoints, utilize ferramentas como **Insomnia** ou **Postman**, enviando as requisições apropriadas.

## Como executar o projeto

Para rodar a API localmente, siga os passos abaixo:

```bash
# Clone este repositório
git clone https://github.com/seuusuario/nome-do-repositorio.git

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

A API estará disponível em `http://localhost:3000` (caso a porta padrão do Express seja mantida).

## Como testar a API
Após iniciar o servidor com `node server.js` no seu terminal, utilize **Insomnia** ou **Postman** para criar as requisições HTTP:

1. Listar clientes: `GET localhost:3000/clients`

2. Criar um cliente: `POST localhost:3000/clients` com um body JSON como:
```bash
{
    "nome":"João da Silva",
    "email":"joao@gmail.com"
}
```
3. Atualizar um cliente: `PUT localhost:3000/clients/1`

4. Deletar um cliente: `DELETE localhost:3000/clients/1`

Agora sua API está pronta para testes! 🚀

---

**Esse projeto serve como um primeiro passo para consolidar conhecimentos sobre APIs RESTful. Qualquer feedback ou sugestão será muito bem-vindo!** 🚀
