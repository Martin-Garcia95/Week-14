import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import PurchasePage from '../pageobjects/purchase.page'

describe('My Login application', () => {
    beforeAll('Main page', async () =>{
        await LoginPage.open();
    })

    it('Login and buy without items and empty fields', async () =>{
        await LoginPage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (PurchasePage.backPack).toBeDisplayed()
        await PurchasePage.cartBttn.click()
        await expect (browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect (PurchasePage.checkoutBttn).toBeDisplayed();
        await PurchasePage.checkoutBttn.click();
        await PurchasePage.purchase('', '', '')
        await expect (PurchasePage.errorDiv).toHaveText('Error: First Name is required')
    });

    it('Buy without items, using invalid name and empty fields', async () =>{
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('2222', '', '')
        await expect (PurchasePage.errorDiv).toHaveText('Error: Last Name is required')
    });

    it('Buy without items, using invalid last name and empty fields', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('', '2222', '')
        await expect (PurchasePage.errorDiv).toHaveText('Error: First Name is required')
    });

    it('Buy without items, using invalid zip and empty fields', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('', '', 'aaaa')
        await expect (PurchasePage.errorDiv).toHaveText('Error: First Name is required')
    });

    it('Buy without items, using valid name and empty fields', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('Martin', '', '')
        await expect (PurchasePage.errorDiv).toHaveText('Error: Last Name is required')
    });

    it('Buy without items, using valid last name and empty fields', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('', 'Garcia', '')
        await expect (PurchasePage.errorDiv).toHaveText('Error: First Name is required')
    });

    it('Buy without items, using valid zip code name and empty fields', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('', '', '2000')
        await expect (PurchasePage.errorDiv).toHaveText('Error: First Name is required')
    });

    it('Buy without items, using valid name, invalid last name and empty zip code', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('Martin', '22222', '')
        await expect (PurchasePage.errorDiv).toHaveText('Error: Postal Code is required')
    });

    it('Buy without items, using valid name, empty last name and invalid zip code', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('Martin', '', 'aaaaa')
        await expect (PurchasePage.errorDiv).toHaveText('Error: Last Name is required')
    });

    it('Buy without items, using valid name, valid last name and empty zip code', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('Martin', 'Garcia', '')
        await expect (PurchasePage.errorDiv).toHaveText('Error: Postal Code is required')
    });

    it('Buy without items, using valid name, valid last name and invalid zip code', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('Martin', 'Garcia', 'aaaaa')
        await PurchasePage.finishBttn.click();
        await expect (PurchasePage.confirmationImg).toHaveAttr('src','/static/media/pony-express.46394a5d.png')
        await PurchasePage.returnBttn.click();
    });

    it('Buy without items, using valid name, valid last name and valid zip code', async () =>{
        await browser.refresh();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (PurchasePage.backPack).toBeDisplayed();
        await PurchasePage.cartBttn.click();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect (PurchasePage.checkoutBttn).toBeDisplayed();
        await PurchasePage.checkoutBttn.click();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await PurchasePage.purchase('Martin', 'Garcia', '2000')
        await PurchasePage.finishBttn.click();
        await expect (PurchasePage.confirmationImg).toHaveAttr('src','/static/media/pony-express.46394a5d.png')
        await PurchasePage.returnBttn.click();
    });


    it('Buy with items, using empty fields', async () =>{
        await browser.refresh();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (PurchasePage.backPack).toBeDisplayed();
        await PurchasePage.backPack.click();
        await expect (PurchasePage.purchaseBttn).toBeDisplayed();
        await PurchasePage.purchaseBttn.click();
        await expect (PurchasePage.cartNotification).toBeDisplayed();
        await PurchasePage.cartBttn.click();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect (PurchasePage.checkoutBttn).toBeDisplayed();
        await PurchasePage.checkoutBttn.click();
        await PurchasePage.purchase('', '', '');
        await expect (PurchasePage.errorDiv).toHaveText('Error: First Name is required')
    });

    it('Buy with items, using invalid name and empty fields', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await PurchasePage.purchase('22222', '', '');
        await expect (PurchasePage.errorDiv).toHaveText('Error: Last Name is required')
    });

    it('Buy with items, using invalid last name and empty fields', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await PurchasePage.purchase('', '22222', '');
        await expect (PurchasePage.errorDiv).toHaveText('Error: First Name is required')
    });

    it('Buy with items, using invalid zip code and empty fields', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await PurchasePage.purchase('', '', 'aaaa');
        await expect (PurchasePage.errorDiv).toHaveText('Error: First Name is required')
    });

    it('Buy with items, using valid name and empty fields', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await PurchasePage.purchase('Martin', '', '');
        await expect (PurchasePage.errorDiv).toHaveText('Error: Last Name is required')
    });

    it('Buy with items, using valid name, invalid last name and empty zip code', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await PurchasePage.purchase('Martin', '2222', '');
        await expect (PurchasePage.errorDiv).toHaveText('Error: Postal Code is required')
    });

    it('Buy with items, using valid name, empty last name and invalid zip code', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await PurchasePage.purchase('Martin', '', 'aaaa');
        await expect (PurchasePage.errorDiv).toHaveText('Error: Last Name is required')
    });

    it('Buy with items, using valid name, valid last name and empty zip code', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await PurchasePage.purchase('Martin', 'Garcia', '');
        await expect (PurchasePage.errorDiv).toHaveText('Error: Postal Code is required')
    });

    it('Buy with items, using valid name, valid last name and invalid zip code', async () =>{
        await browser.refresh();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await PurchasePage.purchase('Martin', 'Garcia', 'aaaaa');
        await expect(PurchasePage.itemInventory).toBeDisplayed();
        await PurchasePage.finishBttn.click();
        await expect (PurchasePage.confirmationImg).toHaveAttr('src','/static/media/pony-express.46394a5d.png')
        await PurchasePage.returnBttn.click();
    });

    it('Buy with items, using valid name, valid last name and valid zip code', async () =>{
        await browser.refresh();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (PurchasePage.backPack).toBeDisplayed();
        await PurchasePage.backPack.click();
        await expect (PurchasePage.purchaseBttn).toBeDisplayed();
        await PurchasePage.purchaseBttn.click();
        await expect (PurchasePage.cartNotification).toBeDisplayed();
        await PurchasePage.cartBttn.click();
        await expect (browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect (PurchasePage.checkoutBttn).toBeDisplayed();
        await PurchasePage.checkoutBttn.click();
        await PurchasePage.purchase('Martin', 'Garcia', '2000');
        await expect(PurchasePage.itemInventory).toBeDisplayed();
        await PurchasePage.finishBttn.click();
        await expect (PurchasePage.confirmationImg).toHaveAttr('src','/static/media/pony-express.46394a5d.png')
        await PurchasePage.returnBttn.click();
    });
})