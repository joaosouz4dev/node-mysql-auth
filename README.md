# Node mysql marcipriano

> Node.js + API MySQL para gerenciamento de usuários, autenticação e registro

## Banco MYSQL

> Para modificar os dados de conneção com banco basta acessar o arquivo `config.json`.

## Rotas

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.postman.co/run-collection/94a25c9bc7325f1c9dbf)

### Registrar POST

> <http://localhost:4000/users/register>

```json
{
    "firstName": "Mar",
    "lastName": "Cipriano",
    "username": "Marci",
    "password": "my-super-secret-password"
}
```

![plot](./doc/register-user.png)

### Autenticar POST

> <http://localhost:4000/users/authenticate>

```json
{
    "username": "Marci",
    "password": "my-super-secret-password"
}
```

![plot](./doc/authenticate-user.png)

### Retornar Usuários GET

> Nessa rota precisa passar o `token` requisitado.
> <http://localhost:4000/users>

![plot](./doc/access-secure-route.png)

### Atualizando um usuário PUT

> Para atualizar basta passar na url a id do usuário desejado e o token na autorização. ex: `/users/{id}`
> <http://localhost:4000/users/1>

```json
{
    "firstName": "João Victor",
    "lastName": "Souza",
    "username": "joaosouz4dev"
}
```

![plot](./doc/update-user.png)

### Deletando um usuário DELETE

> Para deletar basta passar na url a id do usuário desejado e o token na autorização. ex: `/users/{id}`
> <http://localhost:4000/users/1>

![plot](./doc/delete-user.png)

### Capturando usuário com base no token GET

> Nessa rota precisa passar o `token` requisitado.
> <http://localhost:4000/users/current>

![plot](./doc/current-user.png)
