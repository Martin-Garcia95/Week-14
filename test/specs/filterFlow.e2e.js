import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import PurchasePage from '../pageobjects/purchase.page'
import FilterPage from '../pageobjects/filter.page';

describe('My Login application', () => {
    beforeAll('Main page', async () =>{
        await LoginPage.open();
    })

    it('Login and using filter Z-A', async () =>{
        await LoginPage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (PurchasePage.backPack).toBeDisplayed();
        await FilterPage.filterBttn.click();
        await expect (FilterPage.filterZA).toBeDisplayed();
        await FilterPage.filterZA.click();
        await expect(FilterPage.filterZA).toHaveText('Name (Z to A)');
        await expect (PurchasePage.redShirt).toBeDisplayed();
    })

    it('Using filter A-Z', async () =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (PurchasePage.redShirt).toBeDisplayed();
        await FilterPage.filterBttn.click();
        await expect (FilterPage.filterAZ).toBeDisplayed();
        await FilterPage.filterAZ.click();
        await expect(FilterPage.filterAZ).toHaveText('Name (A to Z)');
        await expect (PurchasePage.backPack).toBeDisplayed();
    })

    it('Using filter Lower to High price', async () =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (PurchasePage.backPack).toBeDisplayed();
        await FilterPage.filterBttn.click();
        await expect (FilterPage.filterPriceLow).toBeDisplayed();
        await FilterPage.filterPriceLow.click();
        await expect(FilterPage.filterPriceLow).toHaveText('Price (low to high)');
        await expect (PurchasePage.redSweater).toBeDisplayed();
    })

    it('Using filter High to Lower price', async () =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (PurchasePage.redSweater).toBeDisplayed();
        await FilterPage.filterBttn.click();
        await expect (FilterPage.filterPriceHigh).toBeDisplayed();
        await FilterPage.filterPriceHigh.click();
        await expect(FilterPage.filterPriceHigh).toHaveText('Price (high to low)');
        await expect (PurchasePage.blackSweater).toBeDisplayed();
    })
})