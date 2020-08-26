'use strict'

const Image = use('App/Models/Image')
const Helpers = use('Helpers')

/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  
  async store ({ request, response }) {

    try{
      if(!request.file('image'))
        return
      
      const upload = request.file('image', {size: '2mb'})

      const imageName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), {
        name: imageName,
      })

      if(!upload.moved()) {
        throw upload.error()
      }

      const image = await Image.create({
        name: upload.clientName,
        file_name: imageName
      })

      return image
    }catch(err){
        return response.status(err.status).send({error: {message: 'Erro no upload de arquivo'}})
    }

  }

}

module.exports = ImageController
