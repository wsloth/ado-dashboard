export class AdoService {
  baseUrl = 'http://localhost:3000/api';

  async getReleaseDefinitions() {
    return fetch(`${this.baseUrl}/releases/definitions`).then(r => r.json());
  }
}
