(() => {
  const input = document.querySelector('input[name="SAMLResponse"]');
  if (input && input.value) {
    const samlToken = input.value;
    chrome.storage.local.set({ samlToken });
  } else {
    console.warn("⚠️ SAMLResponse input not found on the page.");
  }
})();
