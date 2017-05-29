// Trigger page scraping on click of icon
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log(tab);
   chrome.tabs.executeScript(null, {file: "/content_scripts/page_content.js"});
});

// Receive scraped page data
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);
});