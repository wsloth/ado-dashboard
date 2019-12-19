export class AdoService {
  baseUrl = 'http://localhost:3000/api/';

  async getBuildDefinitions() {
    return this.get('builds/definitions');
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
