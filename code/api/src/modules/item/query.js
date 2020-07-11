// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ItemType  from './types'
import { getAll,getById } from './resolvers'

// Products All
export const items = {
  type: new GraphQLList(ItemType),
  resolve: getAll
}

// Product By slug
export const itemsByUserId = {
  type: new GraphQLList(ItemType),
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
