import { LitElement, html, css } from 'lit-element';

import { AdoService } from '../services/ado-service.js';
import { when } from '../utils/index.js';
import { cardStyles, gridStyles, typographyStyles } from '../styles/index.js';
import { pullRequestTemplate, pullRequestStyles } from './pull-requests/pull-request-item.js';

export class PullRequestsDashboard extends LitElement {
  static get properties() {
    return {
      pullRequests: Array,
    };
  }

  static get styles() {
    return [
      typographyStyles,
      gridStyles,
      cardStyles,
      pullRequestStyles,
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
    this.pullRequests = await adoService.getPullRequests();
  }

  render() {
    const { pullRequests } = this;

    return html`
      <main class="container">
        <div class="col-33">
          <div class="card">
            <h2>Statistics</h2>
          </div>

          <div class="card">
            <h2>Statistics</h2>
          </div>
        </div>

        <div class="col-66">
          <div class="card">
            <h2>Latest Pull Requests</h2>
            ${when(
              pullRequests,
              () => pullRequests.map(pullRequestTemplate),
              () =>
                html`
                  Loading...
                `,
            )}
          </div>
        </div>
      </main>
    `;
  }
}

window.customElements.define('ado-pr-dashboard', PullRequestsDashboard);
