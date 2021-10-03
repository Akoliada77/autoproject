import HomePage from '../pages/HomePage'
import ElementsPage from '../pages/ElementsPage'

describe ('Checking if links work in Homepage', () => {
    let homepage
    let elementspage
    jest.setTimeout(10000)

    beforeAll(async() =>{
        homepage = new HomePage()
        elementspage = new ElementsPage()
    })

    it("HomePageIsLoaded", async() =>{
        await homepage.visit()
    })
    it("ClickOnElements", async() =>{
        await homepage.clickOnElementsPage()
    })
    it("ClickOnForms", async() =>{
        await homepage.visit()
        await homepage.clickOnFormsPage()
    })
    it("ClickOnAlerts", async() =>{
        await homepage.visit()
        await homepage.clickOnAlerts()
    })
    it("ClickOnWidgets", async() =>{
        await homepage.visit()
        await homepage.clickOnWidgets()
    })
    it("ClickOnInteractions", async() =>{
        await homepage.visit()
        await homepage.clickOnInteractions()
    })
    it("ClickOnBookStore", async() =>{
        await homepage.visit()
        await homepage.clickOnBookStore()
    })
    
})