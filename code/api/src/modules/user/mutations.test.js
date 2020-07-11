import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import assert from 'assert';

describe("user mutations", () => {
  let server;
  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false,

      })
    );
  })

  it("can update an user", async() => {

    const response = await request(server)
    .get('/')
    .send({ query: '{ user(id: 1) { id email shippingAddress}}'})
    .expect(200)

    expect(response.body.data.user.id).toBe(1);
    expect(response.body.data.user.email).toBe("admin@crate.com");
    expect(response.body.data.user.shippingAddress).toBe("1234 Street, City, ST");

    await request(server)
    .post('/')
    .send({ query: `mutation update{ userUpdate(id: 1,
                    shippingAddress: "True City",  email: "AdminMax@crate.com")
                    {id}}`})
    .expect(200)

   const responseUpdate = await request(server)
   .get('/')
   .send({ query: '{ user(id: 1) { id email shippingAddress}}'})
   .expect(200)

   expect(responseUpdate.body.data.user.id).toBe(1);
   expect(responseUpdate.body.data.user.email).toBe("AdminMax@crate.com");
   expect(responseUpdate.body.data.user.shippingAddress).toBe("True City");

   await request(server)
   .post('/')
   .send({ query: `mutation update{ userUpdate(id: 1,
                   shippingAddress: "1234 Street, City, ST",  email: "admin@crate.com")
                   {id}}`})
   .expect(200)

  })
})
