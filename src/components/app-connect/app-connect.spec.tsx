import { newSpecPage } from '@stencil/core/testing';
import { AppConnect } from './app-connect';

describe('app-connect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppConnect],
      html: `<app-connect></app-connect>`,
    });
    expect(page.root).toEqualHtml(`
      <app-connect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-connect>
    `);
  });
});
