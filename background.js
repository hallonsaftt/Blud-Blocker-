
let blockedSites = [];

chrome.storage.local.get(["blockedSites"], (result) => {
  if (result.blockedSites) {
    blockedSites = result.blockedSites;
  }
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.blockedSites) {
    blockedSites = changes.blockedSites.newValue;
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    for (let site of blockedSites) {
      if (details.url.includes(site)) {
        return {
          redirectUrl: "https://webfire.fun/blocked.html"
        };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
