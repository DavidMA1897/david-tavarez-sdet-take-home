import { type Locator, type Page } from '@playwright/test';

export class SecureAreaPage {
  readonly page: Page;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMessage = page.locator('#flash');
  }
}