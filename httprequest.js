/*const http = require('http');
//creat a server object
http.createServer(function (req,res){
    //write response to cleant 
    res.write('<h1>welcom to http server</h1>');
    res.end();//end the response
    

}).listen(880);// the server object listen
*/
const request = require('request') 
const url = 'https://'

 
request({ url: url }, (error, response) => { 
// Parse the response body from JSON string into JavaScript object 
const data = JSON.parse(response.body) 
// Will print the current temperature to the console 
console.log(data.currently.temperature) 
})