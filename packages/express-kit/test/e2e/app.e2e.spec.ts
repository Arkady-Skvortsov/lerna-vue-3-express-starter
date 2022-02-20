import supertest from 'supertest';
import router from '../../src/routers/router';

describe('GET / - start endpoint', () => {
  it('Should be get "Hello Lerna" message', () => {
    supertest(router).get('/').expect('Hello Lerna');
  });
});
