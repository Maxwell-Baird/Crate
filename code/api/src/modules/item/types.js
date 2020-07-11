// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import { ProductType } from '../product/types'


const ItemType = new GraphQLObjectType({
  name: 'item',
  description: 'Item Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    productId: { type: GraphQLInt },
    product: { type: ProductType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    status: { type: GraphQLString },
    deliveryDate: { type: GraphQLString }
  })
})

export default ItemType
