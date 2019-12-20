import { html, css } from 'lit-element';
import { spacer8, spacer16, font19Mixin, fontMonospacedMixin } from '../../styles/index.js';
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

export const buildStatusStyles = [
  iconStyles,
  css`
    .pr-item {
      padding: ${spacer8};
      border-bottom: 1px solid #22282d;
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
      ${font19Mixin()}
      margin-bottom: ${spacer8};
    }
    .pr-item__container > .pr-item__subtitle > .subtitle__branch-name {
      ${fontMonospacedMixin()}
    }

    .pr-item__extra {
      display: flex;
      align-items: center;
    }
  `,
];

const formatBranchName = build => {
  let branchName;
  if (build.parameters) {
    // The build is on a feature branch -- then, the data is not stored in build.sourceBranch
    const params = JSON.parse(build.parameters);
    branchName = params['system.pullRequest.sourceBranch'];
  }

  if (branchName == null) {
    // The build is on master/develop
    branchName = build.sourceBranch;
  }

  // Clean up the branch name
  branchName = branchName.replace('refs/heads/', '').replace('refs/pulls/', '');
  return html`
    <span class="subtitle__branch-name">${branchIcon} ${branchName}</span>
  `;
};

const formatBuildStatus = status => {
  switch (status) {
    case 1: // In Progress
      return statusIcon(zapIcon, 'orange');
    case 2: // Completed
      return statusIcon(checkIcon, 'green');
    case 4: // Cancelling
      return statusIcon(failedIcon, 'red');
    case 8: // Postponed
      return statusIcon(failedIcon, 'grey');
    case 0: // "None"
    case 32: // NotStarted
    case 47: // "All"
      return statusIcon(dashIcon, 'grey');
    default:
      throw new Error(`Status ${status} not found`);
  }
};

/**
 * Renders a pull request line, containing the following:
 * - A status icon
 * - The title, Project, Branch and User
 * - Whether the PR is a Draft or not
 */
export const buildStatusTemplate = build => html`
  <div class="pr-item">
    <div class="pr-item__status">${formatBuildStatus(build.status)}</div>

    <div class="pr-item__container">
      <div class="pr-item__title">#${build.buildNumber} - ${build.repository.name}</div>
      <div class="pr-item__subtitle">
        ${formatBranchName(build)} - ${build.requestedFor.displayName}
      </div>
    </div>

    <div class="pr-item__extra">
      <div class="pr-item__timestamp">${formatDateTime(build.startTime)}</div>
    </div>
  </div>
`;
