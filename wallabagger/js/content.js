if (typeof (browser) === 'undefined' && typeof (chrome) === 'object') {
    browser = chrome;
}

browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.getContent ) {
      sendResponse({content: document.body.outerHTML})
    }
  }
)
