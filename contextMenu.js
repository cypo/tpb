function search(string,q) {
	var reg = /&/;
	text = string.selectionText.replace(reg, "");
  chrome.tabs.create({  
    url: "https://thepiratebay.org/search/" + encodeURIComponent(text)
  });           
}

chrome.contextMenus.create({
	onclick: search,
	title: "TPB: %s", 
	contexts:["selection"]
  
});