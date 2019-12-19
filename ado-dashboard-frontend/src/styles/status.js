import { css } from 'lit-element';

export const statusStyles = css`
  span.status {
    padding: 2px 6px;
    border: 1px solid grey;
    font-size: 12px;
    border-radius: 50px;

    transform: translateY(-2px);
    display: inline-block;
  }
  span.status.status--info {
    color: #98bdff;
    border-color: #98bdff;
  }
  span.status.status--neutral {
    color: grey;
    border-color: grey;
  }
`;
