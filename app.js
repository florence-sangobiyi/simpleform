var http = require('http');
//create a server object:
http.createServer(function (req, res) {
 res.write({
    <!DOCTYPE html>
    <html>
    <body>
    <h2>Form</h2>
    <form action="/localhost:8080 "target method="post"></form> >
      <input type="text" id="Name" value="Message"><br><br>
      <input type="submit" value="Submit">
    </form> 
    </body>
    </html>
 }); //write a response to the client
 res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
