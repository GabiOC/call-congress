var content = {
  init: function() {
    var url = this.getUrl();
    var title = this.getTitle();
    
    if (!title || !url) {
      var errorMsg = {errors: 'An unknown error has occurred, please try later'};
      this.sendMessage(errorMsg);
      return false;
    }
    var pageData = {
      url: url,
      title: title
    }
    return this.sendMessage(pageData);
  },
  getUrl: function() {
    var canonical = document.querySelectorAll('link[rel=canonical]');
    return canonical.length > 0 ? canonical[0].href : window.location.protocol + '//' + window.location.hostname + window.location.pathname;
  },
  getTitle: function() {
    var og = document.querySelectorAll('meta[property="og:title"]');
    var twtr = document.querySelectorAll('meta[name="twitter:title"]');
    var title = document.getElementsByTagName('title');
    if (og.length > 0) {
      return og[0].content;
    } else if (twtr.length > 0) {
      return twtr[0].content;
    } else if (title.length > 0) {
      return title[0].textContent;
    } else {
      return false;
    }
  },
  sendMessage: function(data) {
    chrome.runtime.sendMessage(data);
  }
}

content.init();