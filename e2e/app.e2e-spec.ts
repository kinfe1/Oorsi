import { PROJECTNAMEPage } from './app.po';

describe('project-name App', () => {
  let page: PROJECTNAMEPage;

  beforeEach(() => {
    page = new PROJECTNAMEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
