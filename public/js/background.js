console.log("background.js loaded");

async function getTabID() {
    try {
        return await chrome.tabs.query({active: true});
    } catch(e) {
        console.log(e);
    }
}

getTabID().then(tabs => {
    const tabId = tabs[0].id;
    console.log(tabId);
    chrome.scripting.executeScript({
        target: {tabId: tabId},
        files: ['js/content-script.js']
    });
}).catch((e) => {
    console.log(e);
});


// chrome.tabs.onUpdated.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['content-script.js']
//     });
// });