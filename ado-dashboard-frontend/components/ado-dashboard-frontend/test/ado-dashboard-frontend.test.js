import { html, fixture, expect } from '@open-wc/testing';

import '../ado-dashboard-frontend.js';

describe('AdoDashboardFrontend', () => {
  it('has page "main" by default', async () => {
    const el = await fixture(html`
      <ado-dashboard-frontend></ado-dashboard-frontend>
    `);

    expect(el.page).to.equal('main');
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-main></page-main>
    `);
  });

  it('renders default fallback content', async () => {
    const el = await fixture(html`
      <ado-dashboard-frontend></ado-dashboard-frontend>
    `);
    el.page = undefined;

    expect(el.page).to.equal(undefined);
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-main></page-main>
    `);
  });

  it('renders page-one if page property is set to pageOne', async () => {
    const el = await fixture(html`
      <ado-dashboard-frontend page="pageOne"></ado-dashboard-frontend>
    `);
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-one></page-one>
    `);
  });

  it('changes the page if a menu link gets clicked', async () => {
    const el = await fixture(html`
      <ado-dashboard-frontend></ado-dashboard-frontend>
    `);
    el.shadowRoot.querySelectorAll('header a')[2].click();

    expect(el.page).to.equal('about');
  });

  it('matches the snapshot', async () => {
    const el = await fixture(html`
      <ado-dashboard-frontend></ado-dashboard-frontend>
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <ado-dashboard-frontend></ado-dashboard-frontend>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
