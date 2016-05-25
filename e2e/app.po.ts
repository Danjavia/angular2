export class CrmPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('crm-app h1')).getText();
  }
}
