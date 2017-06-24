
var Client = require('node-rest-client').Client;
var await = require('await');
var client = new Client();
var getready = await('ip');
var getIP = function () {
  client.get("https://httpbin.org/ip",function(res,data){
    console.log(res);
    getready.keep('ip',res);
  });
}
getIP();
getready.then(function(data){
  console.log("Success");
})
