const express = require('express');
const http = require('http');

const app = express()
const port = 3000

// 添加此中间件用于 HTTP 到 HTTPS 的重定向
app.use((req, res, next) => {
    if (req.secure) {
        next();
    } else {
        res.redirect(301, `https://tw.verifiedowl.com${req.url}`);
    }
});

const httpServer = http.createServer((req, res) => {
    res.writeHead(301, { "Location": `https://tw.verifiedowl.com${req.url}` });
    res.end();
});

httpServer.listen(port, () => {
    console.log('HTTP server running on port 3000');
});
