const http = require('http');
const url = require('url');
const PORT = 8080;
const IP = '127.0.0.1';

const users = [
    {
    1: 0,
    'name':'adf'}
];

const server = http.createServer((req, res) => {


    const pathName = url.parse(req.url).pathname;

    switch (pathName) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/plain');
            res.end('Home');
            break;
        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/plain');
            res.end(JSON.stringify(users));
            break;  case '/users/':
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/plain');
            res.end(JSON.stringify(users))
            break;
        case '/users/create':
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/plain');
            users.push()
            res.end(JSON.stringify(users));
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/plain');
            res.end('Error 404');
            break;
    }

});

server.listen(PORT, () => {
    console.log(`Server listening at: http://${IP}:${PORT}/`);
});