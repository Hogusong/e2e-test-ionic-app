import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to my-ionic-app!");
  });

  it("should contain 'oyster'", () => {
    page.navigateTo();
    expect(page.getContentText()).toContain("oyster");
  })
});
