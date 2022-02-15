import { Schema, model } from 'mongoose';
import { Citizen } from '../interfaces/citizen.interface';

const citizensSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  city_id: { required: true, type: Schema.Types.ObjectId, ref: 'cities' },
  groups: [
    {
      type: { type: Schema.Types.String, required: true },
      name: { type: Schema.Types.String, required: true },
    },
  ],
});

const citizensModel = model<Citizen>('citizens', citizensSchema);

export default citizensModel;
