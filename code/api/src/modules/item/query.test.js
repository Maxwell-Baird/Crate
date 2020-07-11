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

  it("can return all items", async() => {

    const response = await request(server)
    .get('/')
    .send({ query: '{ items { id status deliveryDate}}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('items')
    expect(response.body.data.items[0]).toHaveProperty('id');
    expect(response.body.data.items[0]).toHaveProperty('status');
    expect(response.body.data.items[0]).toHaveProperty('deliveryDate');
  })

  it("can return all items for a user", async() => {

    const response = await request(server)
    .get('/')
    .send({ query: '{ itemsByUserId(id: 2) { id status deliveryDate product { name }}}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('itemsByUserId')
    expect(response.body.data.itemsByUserId[0]).toHaveProperty('id');
    expect(response.body.data.itemsByUserId[0]).toHaveProperty('status');
    expect(response.body.data.itemsByUserId[0]).toHaveProperty('deliveryDate');
    expect(response.body.data.itemsByUserId[0]).toHaveProperty('product');
  })
})
