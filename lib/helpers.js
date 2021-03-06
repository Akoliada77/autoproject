module.exports = {
    waitForText: async function(page, selector, text) {
        try {
            await page.waitForSelector(selector)
            await page.waitForFunction((selector, text) => {
                document.querySelector(selector).innerText.includes(text),
                   {},
                   selector,
                   text
            })
        } catch (error) {
            throw new Error('Text: ' + (text) + ' is not found in the selector: ' + (selector))
        }
    },
    shouldNotExist: async function(page, selector) {
        try {
            await page.waitForSelector(selector, {hidden: true })
        } catch (error) {
            throw new Error('Selector: ' + (selector) + ' is visible but should not be')
        }
    },
    click: async function(page, selector) {
        try{
            await page.waitForSelector(selector)
            await page.click(selector)
        } catch (error) {
            throw new Error ('Could not click on selector '+ (selector))
        }
    },
    getText: async function(page, selector) {
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector, element => element.innerHTML)
        } catch (error) {
            throw new Error ('Cannot get the text from the selector ' + (selector))
        }
    },
    getCount: async function(page, selector) {
        try {
            await page.waitForSelector(selector)
            return await page.$$eval(selector, element => element.length)
        } catch {
            throw new Error('Cannot get count of selector  '+ (selector))
        }
    },
    typeText: async function(page, selector ,text) {
        try {
            await page.waitForSelector(selector)
            await page.type(selector, text)
        } catch (error) {
            throw new Error('Could not type into selector'+ (selector))
        }
    },
    selectText: async function(page, selector) {
        try{
            await page.waitForSelector(selector)
            await page.click(selector, { clickCount: 3 })
        } catch (error) {
            throw new Error ('Could not select the text in selector '+ (selector))
        }
    },
    doubleClick: async function(page, selector) {
        try{
            await page.waitForSelector(selector)
            await page.click(selector, { clickCount: 2 })
        } catch (error) {
            throw new Error ('Could not double click on selector '+ (selector))
        }
    },
    rightClick: async function(page, selector) {
        try{
            await page.waitForSelector(selector)
            let element = await page.$(selector) 
            await element.click({
                button: 'right',
            })  
        } catch(error) {
        throw new Error ('Could not right click on selector'+ (selector))
        }
    },
}