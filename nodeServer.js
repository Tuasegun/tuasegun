const http = require('http')
const fs = require('fs')

const server = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.writeHead(200, {'content-type': "text/html"})
        response.end(`
        <form method="post" action="/message">
            <input type='text' name='message' placeholder='send message' />
            <button type="submit">SEND</button>
            </form>
        `)
     
    }
    else if (request.url === '/message') {
        request.on("data", msg => {
            console.log(msg)
            fs.writeFile(message.txt, "msg", 
            function(){
                console.log("Done writing")
            });
        });
        request.on('end',
            response.end("Done writing")
        );
    }  
})
.listen(8080);