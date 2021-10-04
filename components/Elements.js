import HomePage from '../pages/HomePage'
import ElementsPage from '../pages/ElementsPage'
import { click, getText, typeText } from '../lib/helpers'
import { generateEmail, generateID } from '../lib/utils'
import { expect, use } from 'chai'

let homepage
let elementspage

homepage = new HomePage()
elementspage = new ElementsPage()

export default class Elements {
    async submitTextBox() {
        const userName = generateID(5)
        const email = generateEmail()
        const currentAdr = generateID(5)
        const permanentAdr = generateID(5)
        await typeText(page, '#userName', userName)
        await typeText(page, '#userEmail', email)
        await typeText(page, '#currentAddress', currentAdr)
        await typeText(page, '#permanentAddress', permanentAdr)
        await click(page, '#submit')
        await page.waitForSelector('.border.col-md-12.col-sm-12')
        let name = await getText(page, '#name')
        console.log(name)
        expect(name).to.include(userName)
        let email1 = await getText(page, "#email")
        expect(email1).to.include(email)
        let prmnAdr = await getText(page, "#permanentAddress")
        expect(prmnAdr).to.include(permanentadr)
        let curAdr = await getText(page, "#currentAddress")
        expect(curAdr).to.include(currentAdr)
    }
}