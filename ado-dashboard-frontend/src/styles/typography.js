import { css } from 'lit-element';

export const fontMonospacedMixin = () => css`
  font-family: 'Source Code Pro', monospace;
`;

export const fontTitleMixin = () =>
  css`
    font-family: 'Lato', sans-serif;
  `;

export const fontRegularMixin = () =>
  css`
    font-family: 'Nunito', sans-serif;
  `;

export const font19Mixin = () => css`
  font-size: 19px;
`;

export const typographyStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${fontTitleMixin()}
    font-weight: bold;
  }
`;
