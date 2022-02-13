import router from '../../src/routers/router';
import supertest from 'supertest';

describe('GET / - start endpoint', () => {
  beforeEach((): void => {
    jest.setTimeout(10000);
  });

  it('Should be get "Hello Lerna" message', async () => {
    const res = await supertest(router).get('/').expect('Hello Lerna');

    expect(res.status).toEqual(200);
  });
});
