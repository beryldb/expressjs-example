/* 
 * We establish a connection to a remote server. 
 * In this example, we connect to a remote host 127.0.0.1, port 6378.
 */
 
var Connection = require("beryldb");

var Link = new Connection({
                      host  : "127.0.0.1",            
                      port  : 6378,           
                      login : "root",
                      password: "default"
}).connect({

     connected : function() 
     {
          console.log("Connected to BerylDB server: " + Link.host + ":" + Link.port);
     },

     disconnected : function() 
     { 
          console.error("Disconnected from BerylDB.");
     },

     timeout : function() 
     {
          console.error("Connection link has timed out.");
     },

     retrying : function() 
     {
          console.error("Trying to reconnect to BerylDB server.");
     },

     error : function(error) 
     {
          console.error("Unable to connect to server:", error);
     }
});

module.exports = Link;

