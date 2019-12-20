export class AdoService {
  baseUrl = 'http://localhost:3000/api/';

  async getLatestBuilds() {
    return this.get('builds/latest'); // Note: This endpoint can be very slow :)
  }

  async getReleaseDefinitions() {
    return this.get('releases/definitions');
  }

  async getPullRequests() {
    return this.get('pulls');
  }

  get(url) {
    return fetch(`${this.baseUrl}${url}`).then(response => response.json());
  }
}
