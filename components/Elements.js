import HomePage from '../pages/HomePage'
import ElementsPage from '../pages/ElementsPage'
import { click, getCount, getText, selectText, shouldNotExist, typeText } from '../lib/helpers'
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
        let name2 = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(1)')
        let scndName2 = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(2)')
        let email2 = await getText (page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(4)')
        let age2 = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(3)')
        let salary2 = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(5)')
        let department2 = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(6)')
        expect(name1).to.equal(name2)
        expect(scndName1).to.equal(scndName2)
        expect(email1).to.equal(email2)
        expect(age1).to.equal(age2)
        expect(salary1).to.equal(salary2)
        expect(department1).to.equal(department2)
    }
    async submitSearchInWebTables() {
        let name1 = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(3) > div > div:nth-child(1)')
        let name3 = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(1)')
        let name4 = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(2) > div > div:nth-child(1)')
        await click(page, '#searchBox')
        await typeText(page, '#searchBox', name1)
        const count4 = await getCount(page, '.rt-tr.-padRow.-even')
        const count5 = await getCount(page, '.rt-tr.-padRow.-odd')
        let allCount3 = count4 + count5
        expect(allCount3).to.equal(9)
        let name2 = await getText(page,'#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(1)')
        expect(name1).to.equal(name2)
        await selectText(page, '#searchBox')
        await typeText(page, '#searchBox', name3)
        let name5 = await getText(page,'#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(1)')
        expect(name3).to.equal(name5)
        await selectText(page, '#searchBox')
        await typeText(page, '#searchBox', name4)
        let name6 = await getText(page,'#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(1)')
        expect(name4).to.equal(name6)
    }  
    async deletingStringsInWebTables() {
        await click(page,'#item-2')
        await click(page,'#item-3 > span')
        let count = await getCount(page, '.rt-tr.-padRow.-even')
        let count1 = await getCount(page, '.rt-tr.-padRow.-odd')
        let allCount = count + count1
        await click(page, '#delete-record-1 > svg')
        await click(page, '#delete-record-2 > svg')
        let count2 = await getCount(page, '.rt-tr.-padRow.-even')
        let count3 = await getCount(page, '.rt-tr.-padRow.-odd')
        let allCount1 = count2 + count3
        expect(allCount1).to.be.above(allCount)
        expect(allCount1).to.eq(9)
    }
}