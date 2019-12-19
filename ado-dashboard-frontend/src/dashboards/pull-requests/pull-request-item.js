import { html, css } from 'lit-element';
import { statusStyles, spacer8, spacer16 } from '../../styles/index.js';
import { statusIcon, branchIcon, checkIcon, iconStyles } from '../../components/icons.js';

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
    .pr-item__title {
      font-size: 20px;
      margin-bottom: ${spacer8};
    }
    .pr-item__subtitle > .subtitle__branch-name {
      font-family: 'Source Code Pro', monospace;
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
    case 0:
      return 'Not Set';
    case 1:
      return 'Queued';
    case 2:
      return 'Conflicts';
    case 3: // Succeeded
      return statusIcon(checkIcon, 'green');
    case 4:
      return 'Rejected by Policy';
    case 5:
      return 'Failure';
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

export const pullRequestTemplate = pr => html`
  <div class="pr-item">
    <div class="pr-item__status">${formatBranchMergeStatus(pr.mergeStatus)}</div>

    <div class="pr-item__container">
      <div class="pr-item__title">${pr.title} ${formatPrStatusLabel(pr)}</div>
      <div class="pr-item__subtitle">
        ${pr.repository.name} - ${formatBranchName(pr.targetRefName)} - ${pr.createdBy.displayName}
      </div>
    </div>
  </div>
`;
