const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let filePath = req.url.split('?')[0];
  if (filePath === '/' || filePath === '/index.html') filePath = '/index.html';
  // cleanUrls support
  if (!path.extname(filePath)) filePath += '.html';
  filePath = path.join(__dirname, filePath);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // try index fallback
      if (filePath.endsWith('.html')) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 - Page not found</h1><a href="/index.html">Go Home</a>');
      } else {
        res.writeHead(404); res.end();
      }
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream'});
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 R2M Brands at http://localhost:${PORT}/\n`);
});
