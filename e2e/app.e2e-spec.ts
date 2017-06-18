import { KucharzPage } from './app.po';

describe('kucharz App', () => {
  let page: KucharzPage;

  beforeEach(() => {
    page = new KucharzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
