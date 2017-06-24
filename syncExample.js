var Client = require('node-rest-client').Client;
var sync = require('synchronize');
var client = new Client();

function getIP(cb) {
  client.get("https://httpbin.org/ip",function(res,data){
    // console.log(res)
    cb(null,res.origin);
  })
}

sync.fiber(function() {
  getIP(sync.defer());
  var results = sync.await()
  console.log(results);
});
