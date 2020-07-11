import params from '../../config/params'
import models from '../../setup/models'

export async function getAll() {
  return await models.Item.findAll()
}

export async function getById(parentValue, { id }) {
  return await models.Item.findAll({ where: { userId: id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Product, as: 'product' }
    ]
  })
}
