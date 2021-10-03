import { click } from "../lib/helpers"

export default class ElementsPage {
    async visit() {
        await page.goto('https://demoqa.com/elements')
        await page.waitForSelector('.pattern-backgound.playgound-header')
        await page.waitForSelector('.left-pannel')
    }
    async elementsAreLoaded() {
        await page.waitForSelector('.menu-list')
    }
    async clickOnTextBox() {
        await click(page, '#item-0')
        await page.waitForSelector('#userForm')
        await page.waitForSelector('#userName')
        await page.waitForSelector('#userEmail')
        await page.waitForSelector('#currentAddress')
        await page.waitForSelector('#permanentAddress')
        await page.waitForSelector('#submit')
    }
    async clickOnCheckBox() {
        await click(page,'#item-1')
        await page.waitForSelector('.rct-node.rct-node-parent.rct-node-collapsed')
        await page.waitForSelector('.rct-text')
    }
    async clickOnRadioButton() {
        await click(page,'#item-2')
        await page.waitForSelector('.mb-3')
        await page.waitForSelector('#yesRadio')
        await page.waitForSelector('#impressiveRadio')
        await page.waitForSelector('#noRadio')
    }
    async clickOnWebTables() {
        await click(page,'#item-3')
        await page.waitForSelector('#addNewRecordButton')
        await page.waitForSelector('.ReactTable.-striped.-highlight')
        await page.waitForSelector('#searchBox')
        await page.waitForSelector('.rt-tbody')
    }
    async clickOnButtons() {
        await click(page,'#item-4')
        await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1)')
        await page.waitForSelector('#doubleClickBtn')
        await page.waitForSelector('#rightClickBtn')
        await page.waitForSelector('#XY9sZ')
    }
    async clickOnLinks() {
        await click(page,'#item-5')
        await page.waitForSelector('#simpleLink')
        await page.waitForSelector('#dynamicLink')
        await page.waitForSelector('#created')
        await page.waitForSelector('#no-content')
        await page.waitForSelector('#moved')
        await page.waitForSelector('#bad-request')
        await page.waitForSelector('#unauthorized')
        await page.waitForSelector('#forbidden')
        await page.waitForSelector('#invalid-url')
    }
    async clickOnBrokenLinks() {
        await click(page,'#item-6')
        await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1) > img:nth-child(2)')
        await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1) > img:nth-child(6)')
        await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1) > a:nth-child(10)')
        await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1) > a:nth-child(10)')
    }
    async clickOnUploadAndDownload() {
        await click(page,'#item-7')
        await page.waitForSelector('.mt-3')
        await page.waitForSelector('#downloadButton')
        await page.waitForSelector('#uploadFile')
    }
    async clickOnDynamicProperties() {
        await click(page,'#item-8')
        await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1)')
        await page.waitForSelector('#uploadFile')
        await page.waitForSelector('#colorChange')

    }
    

}