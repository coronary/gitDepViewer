//https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module

const http = require('http')
const url = require('url')
const fetch = require('node-fetch')
const cheerio = require('cheerio')

const host = 'localhost'
const port = 8000

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    const queryObj = url.parse(req.url,true).query
    const packName = queryObj.packName
    if(packName){
        fetch(`https://npmjs.com/package/${packName}`)
          .then(response => response.text())
            .then(body => {
                const $ = cheerio.load(body)
                const packTitle = $('#readme').children().first().text()
                res.writeHead(200)
                res.end(JSON.stringify({title:packTitle}))
            })
            .catch(err => {
                console.log(err)
                res.writeHead(404)
                res.end(JSON.stringify({error:"request fucked up"}))
            })
    }
    else {
        res.writeHead(404)
        res.end(JSON.stringify({error:"Must include packName param"}))
    }
        //res.writeHead(404)
        //res.end(JSON.stringify({error:"it's fucked"}))


}

const server = http.createServer(requestListener);

server.listen(port,host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})
