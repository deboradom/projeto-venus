// http://expressjs.com/pt-br/starter/static-files.html

// dependencies
const Express = require('express');
const cors = require('cors');

// my application
const app = Express()

const corsConfig = cors({
    origin: '*',
})

app.use(corsConfig)
app.use(Express.static('app'))

app.listen(8000, () => console.log('Servidores escutando na porta 8000'))