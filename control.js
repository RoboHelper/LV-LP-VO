const qualifyNumber="+18339320043";
const overflowNumber="+18339390163";
function normalnumbers(){
    document.getElementById("btnlnk").href = `tel: ${qualifyNumber}`
    document.getElementById("btnlnk1").href = `tel: ${qualifyNumber}`
    document.getElementById("btnlnk2").href = `tel: ${qualifyNumber}`
    var script = document.createElement('script');
    script.src = "./scripts/g-tag.js";
    script.type = 'text/javascript';
    script.async = false;
    document.body.appendChild(script);

    s = document.createElement('script');
    s.id = 'LeadiDscript_campaign';
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://create.lidstatic.com/campaign/a57816b4-6c59-f397-7853-7e14e45d3e1b.js?snippet_version=2&callback=addToQueryString';
    var LeadiDscript = document.getElementById('LeadiDscript');
    document.body.appendChild(s);
}
function overflownumbers(){
    document.getElementById("btnlnk").href = `tel: ${overflowNumber}`
    document.getElementById("btnlnk1").href = `tel: ${overflowNumber}`
    document.getElementById("btnlnk2").href = `tel: ${overflowNumber}`
    script = document.createElement('script');
    script.src = "https://b-js.ringba.com/CA7f1be56c7e6f4e229cb806b4c76add9a";
    script.async = true;
    document.body.appendChild(script);
}
function body(){
    var script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11107979629";
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
}
function getQueryParams() {
    var queryString = window.location.search.substring(1);
    var params = {};
    var pairs = queryString.split("&");

    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // Check if the key is "leadid"
        if (key === "leadid") {
            return value; // Return the value if the key matches
        }
        // Store all query parameters in the params object
        params[key] = value;
    }
    // If "leadid" key is not found, you can return null or perform any other action as needed.
    return null;
}
function addToQueryString(value) {
    if (getQueryParams('leadid') == null) {
        const currentQueryString = window.location.search;
        // Check if the current query string is empty or not
        const separator = currentQueryString ? '&' : '?';
        // Create the new query string with the "leadid" parameter and its value
        const newQueryString = `${currentQueryString}${separator}leadid=${encodeURIComponent(value)}`;
        // Get the current URL without the query string
        const urlWithoutQueryString = window.location.origin + window.location.pathname;
        // Create the final URL with the updated query string
        const finalUrl = urlWithoutQueryString + newQueryString;
        // Update the browser's address bar
        window.history.replaceState({}, document.title, finalUrl);
        // Insert Ringba or Retreaver Code here:
        var script = document.createElement('script');
        script.src = "//b-js.ringba.com/CA0457ccda8864417991b332abbcc7951c";
        script.async = true;
        document.head.appendChild(script);
    }
}