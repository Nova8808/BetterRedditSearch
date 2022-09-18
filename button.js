let searchButton = document.getElementById("searchReddit");

searchButton.addEventListener('click', () => {
    var textSearch = document.getElementById("searchText").value;
    var checkIncog = document.getElementById("checkIncog").checked;
    var checkSubreddit = document.getElementById("subredditText").value;
    
    searchFunction(textSearch, checkIncog, checkSubreddit);
})

function searchFunction(whatToSearch, incog, subR){
    var search = '';

    if (whatToSearch == '' && subR != ''){
        search = "http://www.reddit.com/r/"+subR;
    }
    else if (subR !== ''){
        search = "https://www.google.com/search?q=site%3Areddit.com%2Fr%2F"+subR+"+"+whatToSearch+"&rlz=1C1CHBF_enUS856US856&oq=site%3Areddit.com%2Fr%2F"+subR+"+"+whatToSearch+"+&aqs=chrome..69i57j69i58.279285j1j4&sourceid=chrome&ie=UTF-8"
        // search = ('/r/' + subR + ' ' + whatToSearch);
    } else search = "https://www.google.com/search?q=site%3Areddit.com+" + whatToSearch + "&rlz=1C1CHBF_enUS856US856&oq=site%3Areddit.com+" + whatToSearch + "&aqs=chrome.0.69i59j69i58.768017j1j4&sourceid=chrome&ie=UTF-8";
    //search = (' ' + whatToSearch);

    if (incog == true){
    // chrome.windows.create({url: "site:reddit.com" + search, incognito: true});
    chrome.windows.create({url: search, incognito: true});
    } else {
        chrome.tabs.create({ url: search});
    }

}