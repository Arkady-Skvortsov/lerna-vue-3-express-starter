import { Schema, model } from 'mongoose';
import { City } from '../interfaces/city.interface';

const citySchema = new Schema({
  name: { required: true, type: Schema.Types.String },
  data: { required: true, type: Schema.Types.String },
});

const cityModel = model<City>('cities', citySchema);

export default cityModel;
