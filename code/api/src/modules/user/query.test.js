import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'
import models from '../../setup/models'

describe("user queries", () => {
  let server;

  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it("returns all users", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { name email } }'})
      .expect(200)

      expect(response.body.data.users[0]).toEqual({ "name": "The Admin", "email": "admin@crate.com" });
      expect(response.body.data.users[1]).toEqual({ "name": "The User", "email": "user@crate.com" });
      expect(response.body.data.users.length).toEqual(2);
  })

  it("returns a single user", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ user(id: 1) { name email } }'})
      .expect(200)

    expect(response.body.data).toBeTruthy();
    expect(response.body.data.user.name).toEqual("The Admin")
  })
});
