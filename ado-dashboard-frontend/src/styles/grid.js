import { css } from 'lit-element';
import { spacer16 } from './spacing.js';

export const gridStyles = css`
  .container {
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);
  }

  .container > [class^='col-'] {
    display: flex;
    flex-direction: column;
    padding: ${spacer16} 0 ${spacer16} ${spacer16};
  }

  .container > [class^='col-']:last-child {
    padding: ${spacer16};
  }
  .container > [class^='col-'] > *:not(:first-child) {
    margin-top: ${spacer16};
  }

  .container > .col-25 {
    width: 25%;
  }
  .container > .col-33 {
    width: 33.3333%;
  }
  .container > .col-50 {
    width: 50%;
  }
  .container > .col-66 {
    width: 66.6666%;
  }
  .container > .col-75 {
    width: 75%;
  }
`;
