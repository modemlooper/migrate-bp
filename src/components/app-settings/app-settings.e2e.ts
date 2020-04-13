import { newE2EPage } from '@stencil/core/testing';

describe('app-settings', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-settings></app-settings>');

    const element = await page.find('app-settings');
    expect(element).toHaveClass('hydrated');
  });
});
