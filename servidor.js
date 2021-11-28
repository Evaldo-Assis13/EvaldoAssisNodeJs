const http = require('http')

const servidor = http.createServer((req, res) => {
    const resp = []
    resp['/'] = '<h1>Pagina inicial do aluno Evaldo Assis </h1>'
    resp['/evaldo'] = '<h1>Meu nome e Evaldo</h1>'
    resp['/assis'] = '<h1>Meu sobrenome e Assis</h1>'
    resp['semURL'] = '<h1>URL nao encontrada</h1>'

    res.end(resp[req.url] || resp['semURL'])
})

servidor.listen(3001, 'localhost', () => {
    console.log('Servidor de pé em: http://localhost:3001')
    console.log('Para desligar o nosso servidor: ctrl + c')
})