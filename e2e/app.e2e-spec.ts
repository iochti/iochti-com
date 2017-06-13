import { IochtiComPage } from './app.po';

describe('iochti-com App', () => {
  let page: IochtiComPage;

  beforeEach(() => {
    page = new IochtiComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
