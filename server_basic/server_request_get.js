var http = require('http')

var url = require('url')

var querystring = require('querystring')
const { log } = require('console')

var server = http.createServer(function (request, response) {
    console.log('--- log start ---')

    var parsedUrl = url.parse(request.url)
    console.log(parsedUrl)

    // parsedUrl에는 객체화 된 url 이 들어있다. Query String이 담겨있는 query 변수를 가져온 후 querystring 모듈의 parse()함수를 이용해서 객체화
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=')
    console.log(parsedQuery)
    console.log('--- log end ---')

    var result1 = parsedQuery.varOne
    var result2 = parsedQuery.varTwo
    var result3 = parsedQuery.varThree

    console.log(`전달된 varOne의 값은 ${result1} 전달된 varTwo는  ${result2} 전달된 varThree는 ${result3}`)

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.end('Hello node.js!!')
})

server.listen(8086, function () {
    console.log('Server is running...')
})
