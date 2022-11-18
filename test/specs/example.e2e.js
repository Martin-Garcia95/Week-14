import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    beforeAll('Main page', async () =>{
        await LoginPage.open();
    })

    it('Empty fields', async () =>{
        await LoginPage.login('','')
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
        await browser.refresh()
    });

    it('Invalid user, empty password', async () =>{
        await LoginPage.login('pepe','');
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        await browser.refresh()
    });

    it('Valid user, empty password', async () =>{
        await LoginPage.login('standard_user','');
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        await browser.refresh()
    });
    
    it('Valid user, invalid password', async () =>{
        await LoginPage.login('standard_user','pepe');
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await browser.refresh()
    });

    it('Empty user, invalid password', async () =>{
        await LoginPage.login('','pepe');
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
        await browser.refresh()
    });

     it('Empty user, valid password', async () =>{
         await LoginPage.login('','secret_sauce');
         await LoginPage.errorMessage.waitForDisplayed();
         await expect(LoginPage.errorMessage).toBeDisplayed();
         await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
         await browser.refresh()
     });

      it('Valid user, valid password', async () =>{
          await LoginPage.login('standard_user','secret_sauce');
          await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
          await expect (LoginPage.burgerMenu).toBeDisplayed();
          await LoginPage.burgerMenu.click();
          await expect(LoginPage.logoutButton).toBeDisplayed();
          await browser.pause(1000)
          await LoginPage.logoutButton.click();
          await browser.refresh()
      });

      it('Locked user, empty password', async () =>{
          await LoginPage.login('locked_out_user','');
          await LoginPage.errorMessage.waitForDisplayed();
          await expect(LoginPage.errorMessage).toBeDisplayed();
          await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
          await browser.refresh()
      });

      it('Locked user, invalid password', async () =>{
          await LoginPage.login('locked_out_user','pepe');
          await LoginPage.errorMessage.waitForDisplayed();
          await expect(LoginPage.errorMessage).toBeDisplayed();
          await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
          await browser.refresh()
      });

      it('Locked user, valid password', async () =>{
          await LoginPage.login('locked_out_user','secret_sauce');
          await LoginPage.errorMessage.waitForDisplayed();
          await expect(LoginPage.errorMessage).toBeDisplayed();
          await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
          await browser.refresh()
      });

      it('Problem user, empty password', async () =>{
          await LoginPage.login('problem_user', '')
          await LoginPage.errorMessage.waitForDisplayed();
          await expect(LoginPage.errorMessage).toBeDisplayed();
          await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
          await browser.refresh()
      });

      it('Problem user, invalid password', async () =>{
        await LoginPage.login('problem_user', 'pepe')
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await browser.refresh()
    });

    it('Problem user, valid password', async () =>{
        await LoginPage.login('problem_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (LoginPage.burgerMenu).toBeDisplayed();
        await LoginPage.burgerMenu.click();
        await expect(LoginPage.logoutButton).toBeDisplayed();
        await browser.pause(1000)
        await LoginPage.logoutButton.click();
        await browser.refresh()
    });

    it('Performance user, empty password', async () =>{
        await LoginPage.login('performance_glitch_user', '')
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        await browser.refresh()
    })

    it('Performance user, invalid password', async () =>{
        await LoginPage.login('performance_glitch_user', 'pepe')
        await LoginPage.errorMessage.waitForDisplayed();
        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await browser.refresh()
    })

    it('Performance user, valid password', async () =>{
        await LoginPage.login('performance_glitch_user', 'secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (LoginPage.burgerMenu).toBeDisplayed({timeout: 5000});
        await LoginPage.burgerMenu.click();
        await expect(LoginPage.logoutButton).toBeDisplayed();
        await browser.pause(1000)
        await LoginPage.logoutButton.click();
        await browser.refresh()
    });
})