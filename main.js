var http = require('http');
var _URL = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // http header
    var url = req.url;
    const requrl = _URL.parse(url, true);
    const { number } = requrl.query;
    let parsedNumber = parseInt(number);
 
    var metaData = [];
    var copyMeta = [];
    for (var i=1; i<= parsedNumber; i++) {
        metaData.push(i);
    }
    
    copyMeta=metaData;

    // Checking data for Marco, Polo and MarcoPolo
    for (var i = 0; i< metaData.length; i++) {
        if (metaData[i] % 4 === 0 && metaData[i] % 7 === 0) {
            copyMeta[i]='MarcoPolo';
        }
        else if(metaData[i] % 4 === 0) {
            copyMeta[i]='Marco';
        }
        else if(metaData[i] % 7 === 0) {
            copyMeta[i]='Polo';
        }
    }

    // Creating single String
    let resString = "";
    for (var i = 0; i< copyMeta.length; i++) {
        resString = resString + copyMeta[i] + ' ';
        if((i + 1) % 1000 === 0){
            resString = resString + `<br />`;
        }
    }
    
    res.write(`<p>${resString}</p>`); //write a response

    res.end(); //end the response
    
}).listen(8000, function(){
    console.log("server start at port 8000"); //the server object listens on port 3000
});

