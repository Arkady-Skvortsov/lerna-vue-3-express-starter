"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cities_model_1 = __importDefault(require("../models/cities.model"));
class CitizenService {
    constructor() {
        this.citiesModel = cities_model_1.default;
    }
    getCitizens() {
        return this.citiesModel.find();
    }
}
exports.default = CitizenService;
//# sourceMappingURL=citizen.service.js.map