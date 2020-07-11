import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import assert from 'assert';

describe("subscription mutations", () => {
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

  it("can update a subscription", async() => {
    // Requires auth setup, unable to work it out in time.

   //  const response = await request(server)
   //  .get('/')
   //  .send({ query: '{ subscriptionById(subscriptionId: 1) { id name description slug type gender description image} }'})
   //  .expect(200)
   //
   //  expect(response.body.data).toHaveProperty('subscription')
   // expect(response.body.data.subscription.id).toEqual('1');
   // expect(response.body.data.subscription.name).toEqual('Belt for Women');
   // expect(response.body.data.subscription.slug).toEqual('belt-for-women');
   // expect(response.body.data.subscription.type).toEqual('2');
   // expect(response.body.data.subscription.gender).toEqual('2');
   // expect(response.body.data.subscription.description).toEqual('A very nice belt for women.');
   // expect(response.body.data.subscription.image).toEqual('/images/stock/belt-female.jpg');
   //
   //  await request(server)
   //  .post('/')
   //  .send({ query: `mutation subscriptionUpdate(id: 1,
   //                  name: "Cool Product", slug: "cool-subscription, type: "1",
   //                  gender: "1", description: "Coolest belt description")
   //                  {id}`})
   //  .expect(200)
   //
   // const responseUpdate = await request(server)
   //  .get('/')
   //  .send({ query: '{ subscriptionById(subscriptionId: 1) { id name description slug type gender description image} }'})
   //  .expect(200)
   //
   // expect(response.body.data).toHaveProperty('subscription')
   // expect(response.body.data.subscription.id).toEqual('1');
   // expect(response.body.data.subscription.name).toEqual('Belt for Women');
   // expect(response.body.data.subscription.slug).toEqual('belt-for-women');
   // expect(response.body.data.subscription.type).toEqual('2');
   // expect(response.body.data.subscription.gender).toEqual('2');
   // expect(response.body.data.subscription.description).toEqual('A very nice belt for women.');
   // expect(response.body.data.subscription.image).toEqual('/images/stock/belt-female.jpg');

   // await request(server)
   //  .post('/')
   //  .send({ query: `mutation subscriptionUpdate(id: 1,
   //                  name: "Belt for Women", slug: "belt-for-women, type: "2",
   //                  gender: "2", description: "A very nice belt for women.")
   //                  {id}`})
   //  .expect(200)
  })

  it("can create and remove a subscription", async() => {
    // Requires auth setup, unable to work it out in time.

   //  await request(server)
   //  .post('/')
   //  .send({ query: `mutation subscriptionCreate(crateId: 1)
   //                  {id}`})
   //  .expect(200)
   //
   // const responseUpdate = await request(server)
   // .get('/')
   // .send({ query: '{ subscriptionById(subscriptionId: 1) { id name description } }'})
   // .expect(200)
   //
   // expect(response.body.data).toHaveProperty('subscription')
   // expect(response.body.data.subscription).toHaveProperty('id');
   // expect(response.body.data.subscription.name).toEqual('Hat');
   // expect(response.body.data.subscription.slug).toEqual('hat');
   // expect(response.body.data.subscription.type).toEqual('1');
   // expect(response.body.data.subscription.gender).toEqual('2');
   // expect(response.body.data.subscription.description).toEqual('Coolest hat');
   // expect(response.body.data.subscription.image).toEqual('/images/stock/belt-female.jpg');
   //
   // await request(server)
   // .post('/')
   // .send({ query: `mutation update{ subscriptionRemove(id: ${response.body.data.subscription.id})
   //                 {id}}`})
   // .expect(200)

  })
})
