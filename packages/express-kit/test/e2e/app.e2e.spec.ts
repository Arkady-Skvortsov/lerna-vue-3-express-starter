import router from '../../src/routers/router';
import supertest from 'supertest';

describe('GET / - start endpoint', () => {
  it('Should be get "Hello Lerna" message', () => {
    supertest(router).get('/').expect('Hello Lerna');
  });
});
