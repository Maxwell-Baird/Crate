// Imports
// Imports GraphQL classes that will be used
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// Imports the type defined in file and resolver functions
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
// Defines a function to be called from main mutations file
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
// Defines a function to be called from main mutations file
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// Add image update, description update
