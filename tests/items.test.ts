import app from "../src/app"
import supertest from 'supertest';
import {faker} from "@faker-js/faker"


describe('Testa POST /items ', () => {
  it('Deve retornar 201, se cadastrado um item no formato correto', async () => {
    const body = {
      title: faker.lorem.word(),
      url: faker.internet.url(),
      description: faker.lorem.paragraph(),
      amount: 777
  };

  const result = await supertest(app).post("/items").send(body);
  expect(result.status).toEqual(201);
  }
  
  );

  it('Deve retornar 409, ao tentar cadastrar um item que exista', async () => {
    const body = {
      title: faker.lorem.word(),
      url: faker.internet.url(),
      description: faker.lorem.paragraph(),
      amount: 777
  };

  const firstTry = await supertest(app).post("/items").send(body);
  expect(firstTry.status).toEqual(201);

  const secondTry = await supertest(app).post("/items").send(body);
  expect(secondTry.status).toEqual(409);
  });
  
  
});

describe('Testa GET /items ', () => {
  it('Deve retornar status 200 e o body no formato de Array', async () => {
    const item = await supertest(app).get("/items");
    expect(item.status).toEqual(200)
    expect(item.body)
    

  });
});

describe('Testa GET /items/:id ', () => {
  it.todo('Deve retornar status 200 e um objeto igual a o item cadastrado', async () => {
    const body = {
      title: faker.lorem.word(),
      url: faker.internet.url(),
      description: faker.lorem.paragraph(),
      amount: 777
  };

  });





  it('Deve retornar status 404 caso não exista um item com esse id', async () => {
    const item = await supertest(app).get("/items/100").query({id: faker.random.numeric()})
    expect(item.status).toEqual(404)

  });
});
