import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ion-title')).getText();
  }

  getContentText() {
    return element(by.css('ion-content')).getText();
  }
}
