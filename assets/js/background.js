(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

chrome.runtime.onInstalled.addListener(function () {
  ga('create', 'UA-87765340-1', 'auto');
  ga('set', 'checkProtocolTask', function (){});
  ga('require', 'displayfeatures');
  ga('send', {
    hitType: 'event',
    eventCategory: 'Installation',
    eventAction: 'Install',
    eventLabel: 'App Installed'
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '*.zendesk.com/agent/*', schemes: ['https'] },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
