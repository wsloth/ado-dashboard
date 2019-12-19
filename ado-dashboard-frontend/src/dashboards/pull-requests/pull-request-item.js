import { html, css } from 'lit-element';
import { statusStyles, spacer8, spacer16 } from '../../styles/index.js';
import {
  statusIcon,
  branchIcon,
  checkIcon,
  failedIcon,
  dashIcon,
  zapIcon,
  iconStyles,
} from '../../components/icons.js';
import { formatDateTime } from '../../utils/index.js';

export const pullRequestStyles = [
  statusStyles,
  iconStyles,
  css`
    .pr-item {
      padding: ${spacer8};
      border-bottom: 1px solid lightgrey;
      display: flex;
    }
    .pr-item__status {
      display: flex;
      align-items: center;
      margin-right: ${spacer16};
    }
    .pr-item__container {
      flex-grow: 1;
    }
    .pr-item__container > .pr-item__title {
      font-size: 20px;
      margin-bottom: ${spacer8};
    }
    .pr-item__container > .pr-item__subtitle > .subtitle__branch-name {
      font-family: 'Source Code Pro', monospace;
    }

    .pr-item__extra {
      display: flex;
      align-items: center;
    }
  `,
];

const formatBranchName = targetRefName => {
  const branchName = targetRefName.replace('refs/heads/', '');
  return html`
    <span class="subtitle__branch-name">${branchIcon} ${branchName}</span>
  `;
};

const formatBranchMergeStatus = status => {
  switch (status) {
    case 0: // "Not Set"
      return statusIcon(dashIcon, 'grey');
    case 1: // Queued
      return statusIcon(dashIcon, 'orange');
    case 2: // Conflicts
      return statusIcon(zapIcon, 'orange');
    case 3: // Succeeded
      return statusIcon(checkIcon, 'green');
    case 4: // "Rejected by Policy"
      return statusIcon(dashIcon, 'grey');
    case 5: // Failure
      return statusIcon(failedIcon, 'red');
    default:
      throw new Error(`Status ${status} not found`);
  }
};

const formatPrStatusLabel = pr => {
  if (pr.isDraft)
    return html`
      <span class="status status--info">Draft</span>
    `;
  return '';
};

/**
 * Renders a pull request line, containing the following:
 * - A status icon
 * - The title, Project, Branch and User
 * - Whether the PR is a Draft or not
 */
export const pullRequestTemplate = pr => html`
  <div class="pr-item">
    <div class="pr-item__status">${formatBranchMergeStatus(pr.mergeStatus)}</div>

    <div class="pr-item__container">
      <div class="pr-item__title">${pr.title} ${formatPrStatusLabel(pr)}</div>
      <div class="pr-item__subtitle">
        ${pr.repository.name} - ${formatBranchName(pr.targetRefName)} - ${pr.createdBy.displayName}
      </div>
    </div>

    <div class="pr-item__extra">
      <div class="pr-item__timestamp">${formatDateTime(pr.creationDate)}</div>
    </div>
  </div>
`;
