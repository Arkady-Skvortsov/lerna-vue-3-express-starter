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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
require('dotenv').config();
const router_1 = __importDefault(require("./src/routers/router"));
const app = (0, express_1.default)();
const PORT = 5500 !== null && 5500 !== void 0 ? 5500 : process.env.PORT;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionSuccessStatus: 200,
}));
app.use((0, helmet_1.default)());
app.use(router_1.default);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose_1.default
            .connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@lerna-vue-3-express-sta.kxgo1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
            .then(() => console.log('Mongoose had been connected'))
            .catch((e) => console.log(e));
        console.log(`Server had been started at ${PORT} port`);
    }
    catch (e) {
        throw new Error(e);
    }
}));
//# sourceMappingURL=index.js.map