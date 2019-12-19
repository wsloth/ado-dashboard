import { LitElement, html, css } from 'lit-element';
import { backgroundAccent } from '../styles/index.js';

export class Header extends LitElement {
  static get styles() {
    return css`
      :host {
        background: ${backgroundAccent};
        width: 100%;
      }
      header {
        height: 80px;
        padding: 0 32px;
      }
      header h1 {
        display: inline-block;
      }

      nav {
        display: inline-block;
      }
      nav > ul > li {
        display: inline;
        margin-right: 24px;
      }
    `;
  }

  render() {
    return html`
      <header>
        <h1>DevOps Insights</h1>
        <nav>
          <ul>
            <li>Pull Requests</li>
            <li>Builds</li>
            <li>Releases</li>
            <li>Application Insights</li>
          </ul>
        </nav>
      </header>
    `;
  }
}

window.customElements.define('ado-header', Header);
