import HomePage from '../pages/HomePage'
import ElementsPage from '../pages/ElementsPage'
import { getText, typeText } from '../lib/helpers'
import { generateID } from '../lib/utils'
import { expect } from 'chai'

let homepage
let elementspage

homepage = new HomePage()
elementspage = new ElementsPage()

export default class Elements {
    async fullNameWorks() {
        const rndtext = "generateID"
        await elementspage.visit()
        await elementspage.elementsAreLoaded()
        await elementspage.clickOnTextBox()
        await typeText(page, '#userName', rndtext)
        await page.waitFor(1000)
        const text = await getText(page,"div:nth-child(2)")
        expect(rndtext).to.eq(text)
    }
}