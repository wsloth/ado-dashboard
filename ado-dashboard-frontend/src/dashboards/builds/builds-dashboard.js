import { LitElement, html, css } from 'lit-element';

import { AdoService } from '../../services/ado-service.js';
import { when } from '../../utils/index.js';
import { cardStyles, gridStyles, typographyStyles, statusStyles } from '../../styles/index.js';

import { buildStatusTemplate, buildStatusStyles } from './build-status-item.js';

export class BuildsDashboard extends LitElement {
  static get properties() {
    return {
      latestBuilds: Array,
    };
  }

  static get styles() {
    return [
      typographyStyles,
      gridStyles,
      cardStyles,
      buildStatusStyles,
      statusStyles,
      css`
        :host {
          width: 100%;
        }
      `,
    ];
  }

  async connectedCallback() {
    super.connectedCallback();
    const adoService = new AdoService();
    this.latestBuilds = await adoService.getLatestBuilds();
  }

  render() {
    const { latestBuilds } = this;

    let statistics = [];
    if (latestBuilds) {
      // Get all unique build definition names
      statistics = [...new Set(latestBuilds.map(b => b.definition.name))]
        // And get the amount of times they have been triggered
        .map(name =>
          latestBuilds.filter(b => b.definition.name === name).map(b => b.definition.name),
        )
        .sort(definition => definition.length);
    }

    return html`
      <main class="container">
        <div class="col-33">
          <div class="card">
            <h2>Statistics</h2>

            ${when(statistics, () =>
              statistics.map(
                stat => html`
                  <p><span class="status status--info">${stat.length}</span> ${stat[0]}</p>
                `,
              ),
            )}
          </div>

          <div class="card">
            <h2>Pipelines</h2>
          </div>
        </div>

        <div class="col-66">
          <div class="card">
            <h2>Latest Builds</h2>
            ${when(
              latestBuilds,
              () => latestBuilds.map(buildStatusTemplate),
              () => 'Loading...',
            )}
          </div>
        </div>
      </main>
    `;
  }
}

window.customElements.define('ado-builds-dashboard', BuildsDashboard);
