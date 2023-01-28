const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

async function main(){
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ftwoub1.mongodb.net/img`)

    console.log('conectado com sucesso')
}
main()
.then(() => console.log('conectado com sucesso'))
.catch((err) => {console.log(err)})

module.exports = main