import { Schema, model } from "mongoose";

const citySchema = new Schema({
  name: { required: true, type: Schema.Types.String },
  data: { required: true, type: Schema.Types.String },
});

const cityModel = model("cities", citySchema);

export default cityModel;
