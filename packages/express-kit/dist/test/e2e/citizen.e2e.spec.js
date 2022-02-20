"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const router_1 = __importDefault(require("../../src/routers/router"));
const data_1 = require("../mock-data/data");
describe('Citizens E2E tests', () => {
    it('should be return all citizens', () => {
        (0, supertest_1.default)(router_1.default).get('/citizens').expect(data_1.mockCitizens);
    });
});
//# sourceMappingURL=citizen.e2e.spec.js.map