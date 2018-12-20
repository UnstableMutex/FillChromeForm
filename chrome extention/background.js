



function cl(tab) {
alert('adfad');


chrome.tabs.executeScript(tab.id, {
   file:"tabscript.js"
    });

 console.log("Content script received: ");
};

chrome.browserAction.onClicked.addListener(cl)