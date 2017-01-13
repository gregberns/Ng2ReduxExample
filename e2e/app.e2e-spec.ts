import { NgreduxPage } from './app.po';

describe('ngredux App', function() {
  let page: NgreduxPage;

  beforeEach(() => {
    page = new NgreduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
