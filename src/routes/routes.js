const express = require('express')
const router = express.Router()
const figureController = require('../controllers/figureController')
const upload = require('../config/multer')

router.post('/figure', upload.single('file'), figureController.create)
router.get('/show', figureController.index)
router.delete('/delete/:id', figureController.delete)


//post = criar
//get = mostrar ou pegar
//delete = deletar
//put = update

module.exports = router