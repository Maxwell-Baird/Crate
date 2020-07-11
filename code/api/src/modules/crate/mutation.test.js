import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import assert from 'assert';

describe("crate mutations", () => {
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

  it("can update a crate", async() => {

    const response = await request(server)
    .get('/')
    .send({ query: '{ crateById(crateId: 1) { id name description } }'})
    .expect(200)

    expect(response.body.data.crateById.id).toBe(1);
    expect(response.body.data.crateById.name).toBe("Clothes for Men");
    expect(response.body.data.crateById.description).toBe("A monthly supply of trendy clothes for men.");

    await request(server)
    .post('/')
    .send({ query: `mutation crateUpdate(id: 1,
                    name: "Cool Crate",  description: "Coolest crate description")
                    {id}`})
    .expect(200)

   const responseUpdate = await request(server)
   .get('/')
   .send({ query: '{ crateById(crateId: 1) { id name description } }'})
   .expect(200)

   expect(response.body.data.crateById.id).toBe(1);
   expect(response.body.data.crateById.name).toBe("Clothes for Men");
   expect(response.body.data.crateById.description).toBe("A monthly supply of trendy clothes for men.");

   await request(server)
   .post('/')
   .send({ query: `mutation update{ userUpdate(id: 1,
                   name: "Cool Crate",  description: "Coolest crate description")
                   {id}}`})
   .expect(200)

  })
})
