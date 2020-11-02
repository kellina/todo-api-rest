const app = require('./server');
const debug = require('debug')('server-starter')

app.listen(8080, () => {
        debug('Pronto para receber conexões na porta 8080.')
    }) //cria servidor web e chama a função callback