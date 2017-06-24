
var Client = require('node-rest-client').Client;
var Fiber = require('fibers');
var client = new Client();
var res;
var getIP = Fiber(function () {
  Fiber.yield(client.get("https://httpbin.org/ip",function(res,data){
    console.log(res);
  }));
});
getIP.run();
console.log("Success");
