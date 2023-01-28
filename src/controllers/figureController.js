const figure = require('../model/figure')
const fs = require('fs')

class figureController{
    async create ( req, res){
        try {
            const {name} = req.body
            const file = req.file
            const image = new figure({
                name,
                src: file.path,
            })

            await image.save()

            res.json({image, msg: 'Imagem salva com sucesso'})

        } catch (error) {
            res.json({msg: 'Erro ao salvar a imagem...'})
        }
    }

    async index ( req, res ){
        const show = await figure.find()

        return res.status(200).json(show)
    }

    async delete ( req, res ){
        try{
            const removeIMG = await figure.findByIdAndRemove(req.params.id)

            if(!removeIMG){
                return res.status(404).json({msg: 'imagem nao encontrada'})
            }

            fs.unlinkSync(removeIMG.src)

            await removeIMG.remove()

            res.json({msg: 'imagem removida com sucesso'})

        }catch(error){
            return res.status(500).json({msg: 'Erro ao excluir imagem...'})
        }
    }
}

module.exports = new figureController