// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   );
//   if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
// });

console.log("hello popup??");

const analyzeButton = document.querySelector("#analyze");

async function getActiveTabId() {
  const queryOptions = { active: true, currentWindow: true };
  const [{ id }] = await chrome.tabs.query(queryOptions);
  return id;
}

analyzeButton?.addEventListener("click", async () => {
  const activeTabId = await getActiveTabId();
  console.log(activeTabId);
  if (activeTabId) {
    const response = await chrome.tabs.sendMessage(activeTabId, {
      task: "HELLOHELLO",
    });
    console.log(response);
  }
});
