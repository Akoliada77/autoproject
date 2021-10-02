import { waitForText, shouldNotExist, click, getText, getCount, typeText, selectText } from "../lib/helpers"
import { generateID, generateEmail } from "../lib/utils"

export default class HomePage {
    async visit() {
        await page.goto("https://demoqa.com")
        await page.waitForSelector("#app")
        await page.waitForSelector(".home-banner")
    }
    async clickOnElementsPage() {
        await click(page, '#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body')
        await page.waitForSelector('.pattern-backgound.playgound-header')
    }
    async clickOnFormsPage() {
        await click(page, '#app > div > div > div.home-body > div > div:nth-child(2) > div > div.card-body')
        await page.waitForSelector('.left-pannel')
    }
    async clickOnAlerts() {
        await click(page, '#app > div > div > div.home-body > div > div:nth-child(3) > div > div.card-body')
        await page.waitForSelector('.left-pannel')
    }
    async clickOnWidgets() {
        await click(page, '#app > div > div > div.home-body > div > div:nth-child(4) > div > div.card-body')
        await page.waitForSelector('.left-pannel')
    }
    async clickOnInteractions() {
        await click(page, '#app > div > div > div.home-body > div > div:nth-child(5) > div > div.card-body')
        await page.waitForSelector('.left-pannel')
    }
    async clickOnBookStore() {
        await click(page, '#app > div > div > div.home-body > div > div:nth-child(6) > div > div.card-body')
        await page.waitForSelector('.left-pannel')
    }   
    async clickOnBanner() {
        await click(page, '.banner-image')
        await page.waitForSelector('.row.align-items-center')
    }   

}   