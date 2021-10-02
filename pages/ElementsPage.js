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
    }
    async clickOnCheckBox() {
        await click(page,'#item-1')
        await page.waitForSelector('.rct-node.rct-node-parent.rct-node-collapsed')
    }
    async clickOnRadioButton() {
        await click(page,'#item-2')
        await page.waitForSelector('.mb-3')
    }
    async clickOnWebTables() {
        await click(page,'#item-3')
        await page.waitForSelector('#addNewRecordButton')
        await page.waitForSelector('.ReactTable.-striped.-highlight')
    }
    async clickOnButtons() {
        await click(page,'#item-4')
        await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1)')
    }
    async clickOnLinks() {
        await click(page,'#item-5')
        await page.waitForSelector('#simpleLink')
    }
    async clickOnBrokenLinks() {
        await click(page,'#item-6')
        await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1) > p:nth-child(1)')
    }
    async clickOnUploadAndDownload() {
        await click(page,'#item-7')
        await page.waitForSelector('.mt-3')
    }
    async clickOnDynamicProperties() {
        await click(page,'#item-8')
        await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1)')
    }
    async isCheckBoxIsEnabled() {
        await page.clickOnCheckBox
    }
}