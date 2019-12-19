/**
 * Icon SVG's fetched from Octicons https://octicons.github.com/
 */
import { html, css } from 'lit-element';
import { textColor } from '../styles/index.js';

export const branchIcon = html`
  <svg
    class="icon icon-branch"
    viewBox="0 0 10 16"
    version="1.1"
    width="10"
    height="16"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 00-1-3.72C.88 1 0 1.89 0 3a2 2 0 001 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
    ></path>
  </svg>
`;
export const checkIcon = html`
  <svg
    class="icon icon-check"
    viewBox="0 0 12 16"
    version="1.1"
    width="12"
    height="16"
    aria-hidden="true"
  >
    <path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path>
  </svg>
`;
export const failedIcon = html`
  <svg
    class="icon icon-failed"
    viewBox="0 0 14 16"
    version="1.1"
    width="14"
    height="16"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47 0 3.14-2.56 5.7-5.7 5.7z"
    ></path>
  </svg>
`;

export const dashIcon = html`
  <svg
    class="icon icon-dash"
    viewBox="0 0 8 16"
    version="1.1"
    width="8"
    height="16"
    aria-hidden="true"
  >
    <path fill-rule="evenodd" d="M0 7v2h8V7H0z"></path>
  </svg>
`;

export const zapIcon = html`
  <svg
    class="icon icon-zap"
    viewBox="0 0 10 16"
    version="1.1"
    width="10"
    height="16"
    aria-hidden="true"
  >
    <path fill-rule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z"></path>
  </svg>
`;

export const statusIcon = (icon, color) =>
  html`
    <span class="icon--status icon--${color}">${icon}</span>
  `;

export const iconStyles = css`
  .icon {
    transform: translate(5px, 3px);
    fill: ${textColor};
  }

  .icon--status {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .icon--status > svg {
    position: absolute;
    width: 25px;
    height: 25px;
    margin-top: 4px;
    margin-left: 3px;
  }
  .icon--status.icon--green {
    background-color: green;
  }
  .icon--status.icon--red {
    background-color: red;
  }
  .icon--status.icon--orange {
    background-color: orange;
  }
  .icon--status.icon--grey {
    background-color: grey;
  }
`;
