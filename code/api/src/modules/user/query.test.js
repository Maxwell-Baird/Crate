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

const user_1 = models.User.create({
      name: 'James Holden',
      email: 'rocinante@spacecraft.com',
      password: '123456',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
      description: "Just be chill",
      userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK0WwfzyZoxuRN3-Z6FgcGREMsCgO3Q6yxjw&usqp=CAU",
      shippingAddress: "Tycho Station"
})

const user_2 = models.User.create({
      name: 'Nyomi Nagata',
      email: 'rocinante_engineer@spacecraft.com',
      password: '654321',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
      description: "I like to work on ships",
      userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRojJZ2dYs-48jPJOo__N9iCs4Ji1ztaNC0eA&usqp=CAU",
      shippingAddress: "Tycho Station"
    })

  it("returns all users", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { name email } }'})
      .expect(200)

      console.log(response.body.data.users)

      expect(response.body.data.users[0]).toEqual({"name": "The Admin", "email": "rocinante@spacecraft.com" });
      expect(response.body.data.users[1]).toEqual({"name": "The User", "email": "user@crate.com"});
      expect(response.body.data.users.length).toEqual(2);
  })

  it("returns a single user", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ user(id: 1) { name email } }'})
      .expect(200)

      // console.log(response.body.data.user)


    expect(response.body.data).toBeTruthy();
    expect(response.body.data.user.name).toEqual("The Admin")
  })

  models.User.destroy({ where: { id: 1 } })
  models.User.destroy({ where: { id: 2 } })
  models.User.destroy({ where: { id: 3 } })
  models.User.destroy({ where: { id: 4 } })

});
