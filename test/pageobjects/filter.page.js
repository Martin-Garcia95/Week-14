import Page from './page';

class FilterPage extends Page {

    get filterBttn () {
        return $('.product_sort_container')
    }

    get filterAZ () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[1]')
    }

    get filterZA () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[2]')
    }

    get filterPriceLow () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[3]')
    }

    get filterPriceHigh () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[4]')
    }

}

export default new FilterPage();