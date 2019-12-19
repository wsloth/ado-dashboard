import { LitElement, html, css } from 'lit-element';

import { cardStyles, gridStyles } from './styles/index.js';
import './components/header.js';
import './dashboards/pull-requests-dashboard.js';

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

  render() {
    return html`
      <ado-header></ado-header>

      <ado-pr-dashboard></ado-pr-dashboard>
    `;
  }
}

window.customElements.define('ado-dashboard', Dashboard);
