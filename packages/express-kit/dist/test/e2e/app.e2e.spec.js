"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../../src/routers/router"));
const supertest_1 = __importDefault(require("supertest"));
describe('GET / - start endpoint', () => {
    beforeEach(() => {
        jest.setTimeout(10000);
    });
    it('Should be get "Hello Lerna" message', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(router_1.default).get('/').expect('Hello Lerna');
        expect(res.status).toEqual(200);
    }));
});
//# sourceMappingURL=app.e2e.spec.js.map