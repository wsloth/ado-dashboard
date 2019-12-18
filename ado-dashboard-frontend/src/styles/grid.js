import { css } from 'lit-element';
import { spacer16 } from './spacing.js';

export const gridStyles = css`
  .container {
    display: flex;
    width: 100%;
    height: calc(100vh - 144px);
  }

  .container > [class^='col-'] {
    padding: ${spacer16} 0 ${spacer16} ${spacer16};
    height: 100%;
  }
  .container > [class^='col-']:last-child {
    padding: ${spacer16};
  }
  .container > .col-25 {
    width: 25%;
  }
  .container > .col-50 {
    width: 50%;
  }
  .container > .col-75 {
    width: 75%;
  }
`;
