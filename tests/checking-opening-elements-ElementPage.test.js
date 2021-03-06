import HomePage from '../pages/HomePage'
import ElementsPage from '../pages/ElementsPage'

describe('Checking if every funcionality is shown in ElementsPage', () => {
    let homepage
    let elementspage
    jest.setTimeout(10000)

    beforeAll(async() =>{
        homepage = new HomePage()
        elementspage = new ElementsPage()
    })
    it("ElementsAreShown", async()=> {
        await elementspage.visit()
        await elementspage.elementsAreLoaded()
    })
    it("TextBoxIsShown", async()=> {
        await elementspage.visit()
        await elementspage.clickOnTextBox()
    })
    it("CheckBoxIsShown", async()=> {
        await elementspage.visit()
        await elementspage.clickOnCheckBox()
    })
    it("RadioButtonIsShown", async()=> {
        await elementspage.visit()
        await elementspage.clickOnRadioButton()
    })
    it("WebTablesAreShown", async()=> {
        await elementspage.visit()
        await elementspage.clickOnWebTables()
    })
    it("ButtonsAreShown", async()=> {
        await elementspage.visit()
        await elementspage.clickOnButtons()
    })
    it("LinksAreShown", async()=> {
        await elementspage.visit()
        await elementspage.clickOnLinks()
    })
    it("BrokenLinksAreShown", async()=> {
        await elementspage.visit()
        await elementspage.clickOnBrokenLinks()
    })
    it("UploadAndDownloadAreShown", async()=> {
        await elementspage.visit()
        await elementspage.clickOnUploadAndDownload()
    })
    it("DynamicPropertiesAreShown", async()=> {
        await elementspage.visit()
        await elementspage.clickOnDynamicProperties()
    })
})