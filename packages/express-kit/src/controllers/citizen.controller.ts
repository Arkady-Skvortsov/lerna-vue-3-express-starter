import CitizenService from '../services/citizen.service';

export default class CitizenController {
  private citizenService = new CitizenService();

  constructor() {}

  async getCitizens() {
    try {
      return await this.citizenService.getCitizens();
    } catch (e) {
      throw new Error('Не удалось получить всех граждан');
    }
  }
}
