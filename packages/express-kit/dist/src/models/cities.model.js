"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const citySchema = new mongoose_1.Schema({
    name: { required: true, type: mongoose_1.Schema.Types.String },
    data: { required: true, type: mongoose_1.Schema.Types.String },
});
const cityModel = (0, mongoose_1.model)('cities', citySchema);
exports.default = cityModel;
//# sourceMappingURL=cities.model.js.map