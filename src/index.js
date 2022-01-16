console.log("loaded index.js");

async function getTabID() {
    try {
        return await chrome.tabs.query({active: true, url: '<all_urls>'});
    } catch(e) {
        console.log(e);
    }
}

async function getBody() {
    console.log("try get screenshot");
    return document.body.innerHTML;
}

window.onload = () => {
    let button = document.getElementById("triggerScreenshot");
    button.addEventListener("click", () => {
        console.log("clicked button");
        getTabID().then(tabs => {
            const tabId = tabs[0].id;
            const tabTitle = tabs[0].title;
            const tabWindowId = tabs[0].windowId;
            console.log("Tab ID: " + tabId + " Window ID: " + tabWindowId + " Title: " + tabTitle);
            chrome.tabs.captureVisibleTab(tabs[0].windowId).then((dataUrl) => {
                let img = new Image();
                img.src = dataUrl;
                console.log(dataUrl);
                document.body.appendChild(img);
            });
        }).catch((e) => {
            console.log(e);
        });
    });
}
