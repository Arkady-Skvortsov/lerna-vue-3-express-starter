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
const express_1 = require("express");
const citizen_controller_1 = __importDefault(require("../controllers/citizen.controller"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Hello Lerna');
});
router.get('/citizens', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const citizens = new citizen_controller_1.default();
    res.send(yield citizens.getCitizens());
}));
exports.default = router;
//# sourceMappingURL=router.js.map