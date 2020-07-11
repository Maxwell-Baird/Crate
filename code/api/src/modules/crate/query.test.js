import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import assert from 'assert';

describe("user queries", () => {
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
  });

  it("is true", () => {
    expect(true).toBe(true)
  });

  it("returns all crates", async() => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ crates(orderBy: "ASC") { id name description } }'})
      .expect(200)

      expect(response.body.data).toHaveProperty('crates')
      expect(response.body.data.crates[0]).toHaveProperty('id');
      expect(response.body.data.crates[0]).toHaveProperty('name');
      expect(response.body.data.crates[0]).toHaveProperty('description');
  })

  it("returns a single crate by id", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ crateById( crateId:1 ) { id name description } }'})
    .expect(200)

    expect(response.body.data).toHaveProperty('crateById')
    expect(response.body.data.crateById).toHaveProperty('id');
    expect(response.body.data.crateById).toHaveProperty('name');
    expect(response.body.data.crateById).toHaveProperty('description');
  })
});
