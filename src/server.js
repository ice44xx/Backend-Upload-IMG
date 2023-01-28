const app = require('./app')

require('dotenv').config()
require('./connection')


const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})