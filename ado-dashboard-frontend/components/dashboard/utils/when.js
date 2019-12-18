import { html } from 'lit-html';

export const when = (condition, truthyTemplate, falsyTemplate) => {
  if (condition) return truthyTemplate();
  if (falsyTemplate) return falsyTemplate();
  return html``;
};
