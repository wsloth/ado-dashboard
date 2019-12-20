import { css } from 'lit-element';
import { backgroundAccent } from './colors.js';
import { spacer16 } from './spacing.js';

export const cardStyles = css`
  .card {
    background-color: ${backgroundAccent};
    padding: ${spacer16};
    height: 100%;
    overflow: hidden;
  }

  .card > h1,
  .card > h2,
  .card > h3,
  .card > h4,
  .card > h5,
  .card > h6 {
    margin-top: 0;
    margin-bottom: ${spacer16};
  }
`;
