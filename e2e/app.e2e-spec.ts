import { MiniSocialNetworkPage } from './app.po';

describe('mini-social-network App', () => {
  let page: MiniSocialNetworkPage;

  beforeEach(() => {
    page = new MiniSocialNetworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
