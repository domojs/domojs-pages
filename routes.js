route.on('remote', function(url, params, unchanged){
    $.ajax(loadJsonFromUrl('/assets/pages/remote.json')); 
});
route.on('shutters', function(url, params, unchanged){
    $.ajax(loadJsonFromUrl('/assets/pages/shutters.json')); 
});
route.on('home', function(url, params, unchanged){
    $.ajax(loadHtml('/assets/pages/home.html')); 
});