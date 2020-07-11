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

  it("can update a product", async() => {
    // Requires auth setup, unable to work it out in time.

   //  const response = await request(server)
   //  .get('/')
   //  .send({ query: '{ productById(productId: 1) { id name description slug type gender description image} }'})
   //  .expect(200)
   //
   //  expect(response.body.data).toHaveProperty('product')
   // expect(response.body.data.product.id).toEqual('1');
   // expect(response.body.data.product.name).toEqual('Belt for Women');
   // expect(response.body.data.product.slug).toEqual('belt-for-women');
   // expect(response.body.data.product.type).toEqual('2');
   // expect(response.body.data.product.gender).toEqual('2');
   // expect(response.body.data.product.description).toEqual('A very nice belt for women.');
   // expect(response.body.data.product.image).toEqual('/images/stock/belt-female.jpg');
   //
   //  await request(server)
   //  .post('/')
   //  .send({ query: `mutation productUpdate(id: 1,
   //                  name: "Cool Product", slug: "cool-product, type: "1",
   //                  gender: "1", description: "Coolest belt description")
   //                  {id}`})
   //  .expect(200)
   //
   // const responseUpdate = await request(server)
   //  .get('/')
   //  .send({ query: '{ productById(productId: 1) { id name description slug type gender description image} }'})
   //  .expect(200)
   //
   // expect(response.body.data).toHaveProperty('product')
   // expect(response.body.data.product.id).toEqual('1');
   // expect(response.body.data.product.name).toEqual('Belt for Women');
   // expect(response.body.data.product.slug).toEqual('belt-for-women');
   // expect(response.body.data.product.type).toEqual('2');
   // expect(response.body.data.product.gender).toEqual('2');
   // expect(response.body.data.product.description).toEqual('A very nice belt for women.');
   // expect(response.body.data.product.image).toEqual('/images/stock/belt-female.jpg');

   // await request(server)
   //  .post('/')
   //  .send({ query: `mutation productUpdate(id: 1,
   //                  name: "Belt for Women", slug: "belt-for-women, type: "2",
   //                  gender: "2", description: "A very nice belt for women.")
   //                  {id}`})
   //  .expect(200)
  })

  it("can create and remove a product", async() => {
    // Requires auth setup, unable to work it out in time.

   //  await request(server)
   //  .post('/')
   //  .send({ query: `mutation productCreate(name: "Hat", slug: "hat", description: "Coolest hat",
  //                                          type: "1", gender:"2", image: "/images/stock/belt-female.jpg")
   //                  {id}`})
   //  .expect(200)
   //
   // const responseUpdate = await request(server)
   // .get('/')
   // .send({ query: '{ productById(productId: 1) { id name description } }'})
   // .expect(200)
   //
   // expect(response.body.data).toHaveProperty('product')
   // expect(response.body.data.product).toHaveProperty('id');
   // expect(response.body.data.product.name).toEqual('Hat');
   // expect(response.body.data.product.slug).toEqual('hat');
   // expect(response.body.data.product.type).toEqual('1');
   // expect(response.body.data.product.gender).toEqual('2');
   // expect(response.body.data.product.description).toEqual('Coolest hat');
   // expect(response.body.data.product.image).toEqual('/images/stock/belt-female.jpg');
   //
   // await request(server)
   // .post('/')
   // .send({ query: `mutation update{ productRemove(id: ${response.body.data.product.id})
   //                 {id}}`})
   // .expect(200)

  })
})
