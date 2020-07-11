import express from 'express';
import request from 'supertest';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import assert from 'assert';

describe("product queries", () => {
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

  it("can get all products", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ products { id name slug type gender description image }}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('products')
    expect(response.body.data.products[0]).toHaveProperty('id');
    expect(response.body.data.products[0]).toHaveProperty('name');
    expect(response.body.data.products[0]).toHaveProperty('slug');
    expect(response.body.data.products[0]).toHaveProperty('type');
    expect(response.body.data.products[0]).toHaveProperty('gender');
    expect(response.body.data.products[0]).toHaveProperty('description');
    expect(response.body.data.products[0]).toHaveProperty('image');
  })

  it("can get single product by slug", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ product(slug: "t-shirt-for-men-white") { id name type slug gender description image}}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('product')
    expect(response.body.data.product).toHaveProperty('id');
    expect(response.body.data.product).toHaveProperty('name');
    expect(response.body.data.product).toHaveProperty('slug');
    expect(response.body.data.product).toHaveProperty('type');
    expect(response.body.data.product).toHaveProperty('gender');
    expect(response.body.data.product).toHaveProperty('description');
    expect(response.body.data.product).toHaveProperty('image');
  })

  it("can get single product by id", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ productById(productId:1) { id name type slug gender description image}}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('productById')
    expect(response.body.data.productById).toHaveProperty('id');
    expect(response.body.data.productById).toHaveProperty('name');
    expect(response.body.data.productById).toHaveProperty('slug');
    expect(response.body.data.productById).toHaveProperty('type');
    expect(response.body.data.productById).toHaveProperty('gender');
    expect(response.body.data.productById).toHaveProperty('description');
    expect(response.body.data.productById).toHaveProperty('image');
  })

  it("can get related products by id", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ productsRelated(productId:1) { id name type slug gender description image}}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('productsRelated')
    expect(response.body.data.productsRelated.length).toEqual(3)
    expect(response.body.data.productsRelated[0]).toHaveProperty('id');
    expect(response.body.data.productsRelated[0]).toHaveProperty('name');
    expect(response.body.data.productsRelated[0]).toHaveProperty('slug');
    expect(response.body.data.productsRelated[0]).toHaveProperty('type');
    expect(response.body.data.productsRelated[0]).toHaveProperty('gender');
    expect(response.body.data.productsRelated[0]).toHaveProperty('description');
    expect(response.body.data.productsRelated[0]).toHaveProperty('image');
  })

  it("can get a list of product types", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ productTypes { id name }}'})
    .expect(200)

    expect(response.body.data).toHaveProperty('productTypes')
    expect(response.body.data.productTypes[0]).toHaveProperty('id');
    expect(response.body.data.productTypes[0]).toHaveProperty('name');
  })
})
