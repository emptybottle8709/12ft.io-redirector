// background.js
function redirectTo12ft(tab) {
  if (tab.url) {
    const redirectUrl = `https://12ft.io/${tab.url}`;
    chrome.tabs.update(tab.id, { url: redirectUrl });
  }
}

chrome.browserAction.onClicked.addListener((tab) => {
  redirectTo12ft(tab);
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "redirect-to-12ft") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        redirectTo12ft(tabs[0]);
      }
    });
  }
});
