import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    beforeAll('Main page', async () =>{
        await LoginPage.open();
    })
    it('First input fill', async () =>{
        await LoginPage.login()
        await LoginPage.inputUsername.setValue('standard_user')
        await expect(LoginPage.inputUsername).toHaveValue('standard_user')
    })
    it('Second input fill', async () =>{
        await LoginPage.inputPassword.waitForDisplayed()
        await LoginPage.inputPassword.setValue('secret_sauce')
        await expect(LoginPage.inputPassword).toHaveValue('secret_sauce')
    })
    it('Button login', async ()=>{
        await LoginPage.btnSubmit.waitForDisplayed()
        await LoginPage.btnSubmit.click()
    })
})
