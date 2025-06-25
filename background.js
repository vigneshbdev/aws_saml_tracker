chrome.action.onClicked.addListener(async (tab) => {
  chrome.storage.local.get("samlToken", (data) => {
    const token = data.samlToken;
    if (token) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (token) => {
          navigator.clipboard.writeText(token).then(() => {
            alert("✅ SAML token copied to clipboard!");
          });
        },
        args: [token]
      });
    } else {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => alert("⚠️ No SAML token found!")
      });
    }
  });
});
