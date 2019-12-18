import { LitElement, html, css } from 'lit-element';

import { AdoService } from './services/ado-service.js';
import { when } from './utils/index.js';

export class AdoDashboard extends LitElement {
  static get properties() {
    return {
      releaseDefinitions: Array,
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }

      header {
        background: #fff;
        display: block;
        width: 100%;
        border-bottom: 1px solid #ccc;
      }
      header h1 {
        padding: 0 32px;
      }

      main {
        flex-grow: 1;
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();

    const adoService = new AdoService();
    this.releaseDefinitions = await adoService.getReleaseDefinitions();
  }

  render() {
    const { releaseDefinitions } = this;

    return html`
      <header>
        <h1>ADO Dashboard</h1>
      </header>

      <main>
        <h3>Release Definitions</h3>
        <ul>
          ${when(releaseDefinitions, () =>
            releaseDefinitions.map(
              rd =>
                html`
                  <li>${rd.name}</li>
                `,
            ),
          )}
        </ul>
      </main>
    `;
  }
}

window.customElements.define('ado-dashboard', AdoDashboard);
