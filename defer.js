
var Client = require('node-rest-client').Client;
var defer = require('node-defer');
var client = new Client();
var getIP = defer(function () {
  client.get("https://httpbin.org/ip",function(res,data){
    console.log(res);
    this.resolve("aaa");
  });
});
getIP.then(function(data){
    console.log("Success");
});
