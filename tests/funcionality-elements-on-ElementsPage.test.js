import HomePage from '../pages/HomePage'
import ElementsPage from '../pages/ElementsPage'
import Elements from '../components/Elements'

describe('Checking if every functionality works in ElementsPage', () => {
    let homepage
    let elementspage
    let elements
    jest.setTimeout(10000)

    beforeAll(async() =>{
        homepage = new HomePage()
        elementspage = new ElementsPage()
        elements = new Elements()
    })
    
    it('TextBoxWorks', async() => {
        await elements.fullNameWorks()
    })

})