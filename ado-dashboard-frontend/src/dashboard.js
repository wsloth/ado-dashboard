import { LitElement, html, css } from 'lit-element';

import { AdoService } from './services/ado-service.js';
import { when } from './utils/index.js';

import './components/header.js';

export class Dashboard extends LitElement {
  static get properties() {
    return {
      releaseDefinitions: Array,
      buildDefinitions: Array,
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
      main {
        flex-grow: 1;
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();

    const adoService = new AdoService();
    this.releaseDefinitions = await adoService.getReleaseDefinitions();
    this.buildDefinitions = await adoService.getBuildDefinitions();
  }

  render() {
    const { releaseDefinitions, buildDefinitions } = this;

    return html`
      <ado-header></ado-header>

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

        <h3>Build Definitions</h3>
        <ul>
          ${when(buildDefinitions, () =>
            buildDefinitions.map(
              bd =>
                html`
                  <li>${bd.name}</li>
                `,
            ),
          )}
        </ul>
      </main>
    `;
  }
}

window.customElements.define('ado-dashboard', Dashboard);
