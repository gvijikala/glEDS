// universal-editor-service.cjs
const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

const options = {
  key: fs.readFileSync('./key.pem'),          // Your local SSL key
  cert: fs.readFileSync('./certificate.pem'), // Your local SSL cert
};

const port = 8000;

app.get('/config', (req, res) => {
  res.json({
    configVersion: 1,
    editUrl: 'http://localhost:3000',
    checkAuth: false,
    mountpoints: [
      {
        url: 'http://localhost:3000',
        path: '/',
        type: 'code',
      },
    ],
  });
});

app.listen(8001, () => {
  console.log('Also listening on HTTP port 8001 for fallback');
});

https.createServer(options, app).listen(port, () => {
  console.log(`Universal Editor Service listening on port ${port} as HTTPS Server`);
});
