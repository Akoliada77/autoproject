module.exports = {
    launch: {
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'], 
        // devtools: false,
        // await page.authenticate({  if needed for staging
        // username: creds[""] , 
        // password: creds[""]});
    },
    browserContext: "default",

};