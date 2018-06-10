import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';

let nuxt = null;

describe('Index page', () => {
  beforeEach(async () => {
    const config = {
      dev: false,
      rootDir: resolve(__dirname, '..'),
    };
    nuxt = new Nuxt(config);
    await new Builder(nuxt).build();
    await nuxt.listen(4000, 'localhost');
  }, 30000);

  // Example of testing only generated html
  test('Route / exits and render HTML', async () => {
    const context = {};
    const { html } = await nuxt.renderRoute('/', context);
    expect(html.includes('html')).toBeTruthy();
  });

  // Close server and ask nuxt to stop listening to file changes
  afterEach(() => {
    nuxt.close();
  });
});
