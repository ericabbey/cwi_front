import { CwiPage } from './app.po';

describe('cwi App', () => {
  let page: CwiPage;

  beforeEach(() => {
    page = new CwiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
