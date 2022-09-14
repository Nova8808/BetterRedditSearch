let searchButton = document.getElementById("searchReddit");

searchButton.addEventListener('click', () => {
    var textSearch = document.getElementById("searchText").value;
    var checkIncog = document.getElementById("checkIncog").checked;
    var checkSubreddit = document.getElementById("subredditText").value;
    
    searchFunction(textSearch, checkIncog, checkSubreddit);
})

function searchFunction(whatToSearch, incog, subR){
    var search = '';
    if (subR !== ''){
        search = ('/r/' + subR + ' ' + whatToSearch);
    } else search = (' ' + whatToSearch);

    if (incog == true){
    chrome.windows.create({url: "site:reddit.com" + search, incognito: true});
    } else {
        chrome.tabs.create({ url: 'site:reddit.com' + search});
    }

}