import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecureAreaPage } from '../pages/SecureAreaPage';

const validUser = {
  username: 'tomsmith',
  password: 'SuperSecretPassword!',
};

test.describe('Login functionality', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const secureAreaPage = new SecureAreaPage(page);

    await loginPage.goto();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await expect(page).toHaveURL(/\/secure$/);

    await expect(secureAreaPage.flashMessage).toContainText(
        'You logged into a secure area!'
    );
  });

  test('should show an error with an invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      'invalidUser',
      validUser.password
    );

    await expect(page).toHaveURL(/\/login$/);

    await expect(loginPage.flashMessage).toContainText(
      'Your username is invalid!'
    );
  });

  test('should show an error with an invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      validUser.username,
      'invalidPassword'
    );

    await expect(page).toHaveURL(/\/login$/);

    await expect(loginPage.flashMessage).toContainText(
      'Your password is invalid!'
    );
  });
  
  test('should show an error when username is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        '',
        validUser.password
    );

    await expect(page).toHaveURL(/\/login$/);

    await expect(loginPage.flashMessage).toContainText(
        'Your username is invalid!'
    );
  });

  test('should show an error when password is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        validUser.username,
        ''
    );

    await expect(page).toHaveURL(/\/login$/);

    await expect(loginPage.flashMessage).toContainText(
        'Your password is invalid!'
    );
  });
});