import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    beforeAll('Main page', async () =>{
        await LoginPage.open();
    })

    it('Locked user, empty password', async () =>{
        await LoginPage.login('locked_out_user','');
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        await browser.refresh();
    });

    it('Locked user, invalid password', async () =>{
        await LoginPage.login('locked_out_user','pepe');
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await browser.refresh();
    });

    it('Locked user, valid password', async () =>{
        await LoginPage.login('locked_out_user','secret_sauce');
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
})