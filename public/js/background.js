console.log("background.js loaded");
//
// async function getTabID() {
//     try {
//         return await chrome.tabs.query({active: true, currentWindow: true, url: '<all_urls>'});
//     } catch(e) {
//         console.log(e);
//     }
// }
//
// getTabID().then(tabs => {
//     const tabId = tabs[0].id;
//     console.log(tabId);
// }).catch((e) => {
//     console.log(e);
// });