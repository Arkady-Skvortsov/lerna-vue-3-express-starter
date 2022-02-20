import CitiesModel from '../models/cities.model';

export default class CitiesService {
  private citiesModel = CitiesModel;

  constructor() {}

  async getCities(): Promise<{}> {
    return await this.citiesModel.find().exec();
  }
}
