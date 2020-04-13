import { newE2EPage } from '@stencil/core/testing';

describe('app-connect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-connect></app-connect>');

    const element = await page.find('app-connect');
    expect(element).toHaveClass('hydrated');
  });
});
