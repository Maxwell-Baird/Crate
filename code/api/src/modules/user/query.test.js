import express from 'express';
import request from 'supertest';
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
  })

  it("can get all users", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ users { id name email role description shippingAddress userImage }}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('users');
    expect(response.body.data.users[0]).toHaveProperty('id');
    expect(response.body.data.users[0]).toHaveProperty('name');
    expect(response.body.data.users[0]).toHaveProperty('role');
    expect(response.body.data.users[0]).toHaveProperty('description');
    expect(response.body.data.users[0]).toHaveProperty('shippingAddress');
    expect(response.body.data.users[0]).toHaveProperty('userImage');
  });

  it("can get a single user", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ user(id:1) { id name email role description shippingAddress userImage }}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('user');
    expect(response.body.data.user).toHaveProperty('id');
    expect(response.body.data.user).toHaveProperty('name');
    expect(response.body.data.user).toHaveProperty('role');
    expect(response.body.data.user).toHaveProperty('description');
    expect(response.body.data.user).toHaveProperty('shippingAddress');
    expect(response.body.data.user).toHaveProperty('userImage');
  });

  it("can login a user", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ userLogin(email: "user@crate.com" password: "123456" role: "USER") { user { id } token }}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('userLogin');
    expect(response.body.data.userLogin).toHaveProperty('user');
    expect(response.body.data.userLogin.user).toHaveProperty('id');
    expect(response.body.data.userLogin).toHaveProperty('token');
  });

  it("can get all user genders", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ userGenders { id name } }'})
    .expect(200)

    expect(response.body.data).toHaveProperty('userGenders');
    expect(response.body.data.userGenders[0]).toHaveProperty('id');
    expect(response.body.data.userGenders[0]).toHaveProperty('name');
  });
})

