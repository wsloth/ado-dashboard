import { LitElement, html, css } from 'lit-element';

import { AdoService } from './services/ado-service.js';
import { when } from './utils/index.js';
import { cardStyles, gridStyles } from './styles/index.js';

import './components/header.js';

export class Dashboard extends LitElement {
  static get properties() {
    return {
      releaseDefinitions: Array,
      buildDefinitions: Array,
    };
  }

  static get styles() {
    return [
      gridStyles,
      cardStyles,
      css`
        :host {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }
      `,
    ];
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

      <main class="container">
        <div class="col-25">
          <div class="card">
            <h2>Release Definitions</h2>
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
          </div>
        </div>

        <div class="col-75">
          <div class="card">
            <h2>Build Definitions</h2>
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
          </div>
        </div>
      </main>
    `;
  }
}

window.customElements.define('ado-dashboard', Dashboard);
