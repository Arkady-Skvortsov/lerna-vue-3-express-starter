"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const router_1 = __importDefault(require("../../src/routers/router"));
describe('GET / - start endpoint', () => {
    it('Should be get "Hello Lerna" message', () => {
        (0, supertest_1.default)(router_1.default).get('/').expect('Hello Lerna');
    });
});
//# sourceMappingURL=app.e2e.spec.js.map