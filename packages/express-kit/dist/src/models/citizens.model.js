"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const citizensSchema = new mongoose_1.Schema({
    name: { type: mongoose_1.Schema.Types.String, required: true },
    city_id: { required: true, type: mongoose_1.Schema.Types.ObjectId, ref: "cities" },
    groups: [
        {
            type: { type: mongoose_1.Schema.Types.String, required: true },
            name: { type: mongoose_1.Schema.Types.String, required: true },
        },
    ],
});
const citizensModel = (0, mongoose_1.model)("citizens", citizensSchema);
exports.default = citizensModel;
//# sourceMappingURL=citizens.model.js.map