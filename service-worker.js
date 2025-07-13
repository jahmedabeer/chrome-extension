// https://developer.chrome.com/docs/extensions/reference/api

// injeject content script on click
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
        alert('Hello from the background script!');
    }
  });
});