const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // Handle post info...
        console.log(req)
        res.end(`
        <!Doctype html>
        <html>
        <body>
            <h1>Your message has been saved</h1>
        </body>
        </html>

        `)
    }
    else {
      res.end(`
    
        <!Doctype html>
        <html>
        <body>
        <h2> Form </h2>
            <form action="/" method="post">
                <input type="text" name="message" value="Message" />
        
                <input type="submit" value="Submit" />
                </form>
        </body>
        </html>
      `);
    }
});
server.listen(8080);
