var http = require('http');
//create a server object:
http.createServer(function (req, res) {
res.write('<html>');
res.write('<body>');
res.write("<h2> Form </h2>")
res.write('<form action="/localhost:8080 "target method="post"></form>')
res.write('<input type="text" id="Name" value="Message"> </input>')
res.write('<input type="submit" value="Submit"> </input>')
res.write("</form")
res.write('</body>');
res.write('</html>');
res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
