const siteInput = document.getElementById("siteInput");
const addBtn = document.getElementById("addBtn");
const siteList = document.getElementById("siteList");

let redirectUrl = "https://webfire.fun/blocked.html";

function refreshList() {
  chrome.storage.local.get(["blockedSites"], (result) => {
    siteList.innerHTML = "";
    const sites = result.blockedSites || [];
    sites.forEach((site, index) => {
      const li = document.createElement("li");
      li.textContent = site;
      
      const removeBtn = document.createElement("button");


      removeBtn.textContent = "❌";

      removeBtn.onclick = () => {

        sites.splice(index, 1);
        chrome.storage.local.set({ blockedSites: sites }, () => {
          updateRules(sites);
          refreshList();
        });


      };




      li.appendChild(removeBtn);
      siteList.appendChild(li);
    });
  });
}

addBtn.onclick = () => {
  const newSite = siteInput.value.trim();
  if (!newSite) return;

  chrome.storage.local.get(["blockedSites"], (result) => {
    const sites = result.blockedSites || [];
    if (!sites.includes(newSite)) {
      sites.push(newSite);
      chrome.storage.local.set({ blockedSites: sites }, () => {
        updateRules(sites);

        siteInput.value = "";
        refreshList();
      });
    }


  });


};








function updateRules(sites) {
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    const removeRuleIds = rules.map((r) => r.id);
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: removeRuleIds,
      addRules: sites.map((site, index) => ({
        id: index + 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { url: redirectUrl }
        },
        condition: {
          urlFilter: site,
          resourceTypes: ["main_frame"]
        }
      }))
    });
  });
}

refreshList();
