import CitizensModel from '../models/citizens.model';

export default class CitizenService {
  private citizensModel = CitizensModel;

  constructor() {}

  async getCitizens(): Promise<{}> {
    return await this.citizensModel.find().exec();
  }
}
