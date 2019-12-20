import { LitElement, html, css } from 'lit-element';

import { cardStyles, gridStyles } from './styles/index.js';
import { when } from './utils/index.js';

import './components/header.js';
import './dashboards/pull-requests/pull-requests-dashboard.js';
import './dashboards/builds/builds-dashboard.js';

/**
 * Entrypoint component for the app. Manages the state of the application.
 */
export class Dashboard extends LitElement {
  static get properties() {
    return {
      currentDashboard: String,
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

  connectedCallback() {
    super.connectedCallback();

    const currentIndex = 1;
    const dashboards = ['pull-requests', 'builds'];

    // Set the initial dashboard
    this.currentDashboard = dashboards[currentIndex];

    // Cycle through the other dashboards, staying for 30 secons on each one
    // setInterval(() => {
    //   if (currentIndex < dashboards.length - 1) {
    //     currentIndex++;
    //   } else {
    //     currentIndex = 0;
    //   }
    //   this.currentDashboard = dashboards[currentIndex];
    // }, 30000);
  }

  render() {
    const dashboard = this.currentDashboard;

    return html`
      <ado-header></ado-header>

      ${when(
        dashboard === 'pull-requests',
        () =>
          html`
            <ado-pr-dashboard></ado-pr-dashboard>
          `,
      )}
      ${when(
        dashboard === 'builds',
        () =>
          html`
            <ado-builds-dashboard></ado-builds-dashboard>
          `,
      )}
    `;
  }
}

window.customElements.define('ado-dashboard', Dashboard);
