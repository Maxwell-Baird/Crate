import express from 'express';
import request from 'supertest';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import assert from 'assert';

describe("subscription queries", () => {
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

  it("can get all subscriptions", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ subscriptions { id user { id } crate { id }}}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('subscriptions');
    if (response.body.data.subscriptions.length >= 1) {
      expect(response.body.data.subscriptions[0]).toHaveProperty('id');
      expect(response.body.data.subscriptions[0]).toHaveProperty('user');
      expect(response.body.data.subscriptions[0]).toHaveProperty('crate');
    }
  });

  it("can get subscriptions linked to a user id", async() => {
    const userResponse = await request(server)
    .get('/')
    .send({ query: '{userLogin(email: "user@crate.com" password: "123456" role: "USER") { user { id } token }}'})
    .expect(200);

    const response = await request(server)
    .get('/')
    .set('Authorization', userResponse.body.data.userLogin.token)
    .send({ query: '{ subscriptionsByUser { id user { id } crate { id }}}',
            variables: '{ token = ${userResponse.token} }'})
    .expect(200);

    console.log(userResponse.body.data.userLogin.token);
    console.log(response.body.data);
    expect(response.body.data).toHaveProperty('subscriptionsByUser');
    expect(response.body.data.subscriptionsByUser[0]).toHaveProperty('id');
    expect(response.body.data.subscriptionsByUser[0]).toHaveProperty('user');
    expect(response.body.data.subscriptionsByUser[0]).toHaveProperty('crate');
  });

  it("can get a subscription by id", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ subscription(id: 1) { id user { id } crate { id }}}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('subscription');
    expect(response.body.data.subscription).toHaveProperty('id');
    expect(response.body.data.subscription).toHaveProperty('user');
    expect(response.body.data.subscription).toHaveProperty('crate');
  });

})
