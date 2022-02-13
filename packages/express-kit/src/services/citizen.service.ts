import CitizensModel from '../models/citizens.model';
import CitiesModel from '../models/cities.model';

export default class CitizenService {
  private citiesModel = CitiesModel;

  constructor() {}

  getCitizens() {
    return this.citiesModel.find();
  }
}
