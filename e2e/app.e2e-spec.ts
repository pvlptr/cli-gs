import { CliAvilysPage } from './app.po';

describe('cli-avilys App', function() {
  let page: CliAvilysPage;

  beforeEach(() => {
    page = new CliAvilysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
