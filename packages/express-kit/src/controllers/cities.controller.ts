import CitiesService from '../services/cities.service';

export default class CitiesController {
  private citiesService = new CitiesService();

  constructor() {}

  async getCities() {
    try {
      return await this.citiesService.getCities();
    } catch (e) {
      throw new Error('Не удалось получить все города');
    }
  }
}
