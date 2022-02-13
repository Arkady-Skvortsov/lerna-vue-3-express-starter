import CitizensModel from '../models/citizens.model';
import CitiesModel from '../models/cities.model';

export default class CitizenService {
  private citizensModel = CitizensModel;

  constructor() {}

  async getCitizens() {
    return await this.citizensModel.find().exec();
  }
}
