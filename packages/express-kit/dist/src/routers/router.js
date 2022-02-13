"use strict";
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
router.get('/citizens', (req, res) => {
    const citizens = new citizen_controller_1.default();
    res.send(citizens.getCitizens());
});
exports.default = router;
//# sourceMappingURL=router.js.map