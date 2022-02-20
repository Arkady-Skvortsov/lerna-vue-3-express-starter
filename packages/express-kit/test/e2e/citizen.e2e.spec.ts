import supertest from 'supertest';
import router from '../../src/routers/router';
import { mockCitizens } from '../mock-data/data';

describe('Citizens E2E tests', () => {
  it('should be return all citizens', () => {
    supertest(router).get('/citizens').expect(mockCitizens);
  });
});
