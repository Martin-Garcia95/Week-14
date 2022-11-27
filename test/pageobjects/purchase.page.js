import Page from './page';

class PurchasePage extends Page {

    get blackSweater () {
        return $('#item_5_title_link')
    }

    get backPack (){
        return $('#item_4_title_link')
    }

    get redShirt () {
        return $('#item_3_title_link')
    }

    get redSweater () {
        return $('#item_2_title_link')
    }

    get purchaseBttn (){
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get cartNotification (){
        return $('.shopping_cart_badge')
    }

    get cartBttn () {
        return $('.shopping_cart_link')
    }

    get checkoutBttn () {
        return $('#checkout')
    }

    get firstNameInput () {
        return $('#first-name')
    }

    get lastNameInput () {
        return $('#last-name')
    }

    get zipInput () {
        return $('#postal-code')
    }

    get errorDiv () {
        return $('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]/h3')
    }

    get continueBttn () {
        return $('#continue')
    }

    get itemInventory () {
        return $('.inventory_item_name')
    }

    get finishBttn () {
        return $('#finish')
    }

    get confirmationImg () {
        return $('.pony_express')
    }

    get returnBttn () {
        return $('#back-to-products')
    }

    async purchase (firstName, lastName, zip) {

        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.zipInput.setValue(zip);
        await this.continueBttn.click();
    }
}

export default new PurchasePage();
