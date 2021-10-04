import HomePage from '../pages/HomePage'
import ElementsPage from '../pages/ElementsPage'
import { click, getCount, getText, shouldNotExist, typeText } from '../lib/helpers'
import { generateEmail, generateID, generateNumbers } from '../lib/utils'
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
        expect(name).to.include(userName)
        let email1 = await getText(page, "#email")
        expect(email1).to.include(email)
        // let curAdr = await getText(page, "#currentAddress")
        // expect(curAdr).to.include(currentAdr)
        // let prmnAdr = await getText(page, "#permanentAddress")
        // expect(prmnAdr).to.include(permanentAdr)
    }
    async submitCheckBox() {
        await page.waitForSelector('.rct-icon.rct-icon-uncheck')
        await click(page, '.rct-checkbox')
        await shouldNotExist(page, '.rct-icon.rct-icon-uncheck')
        await page.waitForSelector('#result')
    }
    async submitRadionButton() {
        await click(page, '#noRadio')
        await shouldNotExist(page, '.mt-3')
        await click(page, '#yesRadio')
        let choice = await getText(page, '.text-success')
        expect(choice).to.equal('Yes')
        await click(page, '#impressiveRadio')
        let choice2 = await getText(page, '.text-success')
        expect(choice2).to.equal('Impressive')
    }
    async submitAddingInWebTables() {
        const count = await getCount(page, '.rt-tr.-padRow.-even')
        const count1 = await getCount(page, '.rt-tr.-padRow.-odd')
        let allCount = count + count1
        await click(page, '#addNewRecordButton')
        let name1 = generateID(8)
        await typeText(page, '#firstName', name1)
        let scndName1 = generateID(8)
        await typeText(page, '#lastName', scndName1)
        let email1 = generateEmail()
        await typeText(page, '#userEmail', email1)  
        let age1 = generateNumbers(2)
        await typeText(page, '#age', age1)
        let salary1 = generateNumbers(4)
        await typeText(page, '#salary', salary1)
        let department1 = generateID(8)
        await typeText(page, '#department', department1)
        await click(page, '#submit')
        const count2 = await getCount(page, '.rt-tr.-padRow.-even')
        const count3 = await getCount(page, '.rt-tr.-padRow.-odd')
        let allCount1 = count2 + count3
        expect(allCount).to.be.above(allCount1)
    }
    
}