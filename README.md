# desafio

> Desafio

## Para executar

Crie um arquivo `.env` na raiz, com o seguinte modelo, trocando as variáveis por seu localhost:

```
DB_PATH=mongodb://127.0.0.1:27017/desafio
DB_TEST_PATH=mongodb://127.0.0.1:27017/desafio_test
SERVER_PORT=3000
```

**PS**: Caso troque a porta do servidor, edite o arquivo `src/features/Employees/store/actions.js`, mudando a porta do servidor lá também.

``` bash
# instalar dependências
npm install

# iniciar servidor node
npm run server

# executar testes automatizados da API
npm run test

# executar em ambiende de desenvolvimento em localhost:8080
npm run dev

# compilar e minificar
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
