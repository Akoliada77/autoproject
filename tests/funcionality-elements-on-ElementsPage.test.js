import HomePage from '../pages/HomePage'
import ElementsPage from '../pages/ElementsPage'
import Elements from '../components/Elements'

describe('Checking if every functionality works in ElementsPage', () => {
    let homepage
    let elementspage
    let elements
    jest.setTimeout(20000)

    beforeAll(async() =>{
        homepage = new HomePage()
        elementspage = new ElementsPage()
        elements = new Elements()
    })
    
    it('checkIfTextBoxWorks', async() => {
        await elementspage.visit()
        await elementspage.elementsAreLoaded()
        await elementspage.clickOnTextBox()
        await elements.submitTextBox()
    })
    it('checkIfCheckBoxWorks', async() =>{
        await elementspage.visit()
        await elementspage.elementsAreLoaded()
        await elementspage.clickOnCheckBox()
        await elements.submitCheckBox()
    })
    it('checkIfRadionbuttonWorks', async()=> {
        await elementspage.visit()
        await elementspage.elementsAreLoaded()
        await elementspage.clickOnRadioButton()
        await elements.submitRadionButton()
    })
    it('checkIfWebTablesWork', async() =>{
        await elementspage.visit()
        await elementspage.elementsAreLoaded()
        await elementspage.clickOnWebTables()
        await elements.submitAdding()
        await elements.submitSearch()
        await elements.deletingStrings()
        await elements.updateString()
    })
    it('checkIfButtonsWork', async() => {
        await elementspage.visit()
        await elementspage.elementsAreLoaded()
        await elementspage.clickOnButtons()
        await elements.clickDoubleClick()
        await elements.clickRightClick()
        await elements.clickOnDynamicButton()
    })
    it('checkIfLinksWork', async() => {
        await elementspage.visit()
        await elementspage.elementsAreLoaded()
        await elementspage.clickOnLinks()
    })


})