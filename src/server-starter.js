const app = require('./server');
const debug = require('debug')('server-starter')

app.listen(process.env.PORT, () => {
        debug('Pronto para receber conexões na porta %s.', process.env.PORT)
    }) //cria servidor web e chama a função callback